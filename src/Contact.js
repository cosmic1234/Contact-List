import axios from "axios";
import { useEffect, useState } from "react";
import './style/Contact.css';
import ContactDemo from "./ContactDemo";

const Contacts = props => {
    const [data, setData] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const [screenX, setScreenX] = useState();
    const [screenY, setScreenY] = useState();
    const [displaySelectedContactBox, setDisplaySelectedContactBox] = useState(false);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(e => console.log(e))


    }, [])


    const _onMouseMove = (e) => {

        setScreenX(e.screenX);
        setScreenY(e.screenY);
        // console.log(e.screenX, e.screenY)
    }


    return (
        <div className="contact-wrapper">

            {true && <ContactDemo selectedContact={selectedContact} screenX={screenX} screenY={screenY} />}

            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone no</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((ele, index) => {

                            return (

                                <tr key={index} className={index % 2 ? 'even-row' : 'odd-row'} onMouseMove={_onMouseMove}
                                    onMouseOver={() => { setSelectedContact(data[index]) }}
                                    onMouseLeave={() => setDisplaySelectedContactBox(false)}
                                    onMouseEnter={() => setDisplaySelectedContactBox(true)}

                                >
                                    <td>
                                        {ele.name}
                                    </td>
                                    <td>
                                        {ele.phone}
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )


}

export default Contacts;