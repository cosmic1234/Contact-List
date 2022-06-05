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
        if (!displaySelectedContactBox) {
            setScreenX(e.screenX);
            setScreenY(e.screenY);
        }
    }

    let timer = 0;

    return (
        <div className="contact-wrapper">

            {displaySelectedContactBox && <ContactDemo selectedContact={selectedContact} screenX={screenX} screenY={screenY} setDisplaySelectedContactBox={setDisplaySelectedContactBox} />}

            <table >

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
                                    onMouseLeave={() => {
                                        clearTimeout(timer);
                                        setDisplaySelectedContactBox(false)
                                    }}
                                    onMouseEnter={() => {
                                        setSelectedContact(data[index]);
                                        timer = setTimeout(() => setDisplaySelectedContactBox(true), 1200)

                                    }}

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

            <svg
                onClick={() => console.log('hihihi')}
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
            </svg>
        </div>
    )


}

export default Contacts;