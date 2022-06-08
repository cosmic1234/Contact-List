import axios from "axios";
import { useEffect, useRef, useState } from "react";
import './style/AddContact.css';

const AddContact = ({ data, setData, setDisplayAddContactBox }) => {

    const [contact, setContact] = useState();

    // useEffect(() => console.log(contact), [contact])

    const setAddress = (e) => {


        let key = e.target.name;
        let value = e.target.value;


        if (contact) {

            if (contact.address) {

                let add = Object.assign({}, contact.address);

                if (!(key === 'lat' || key === 'lng')) {
                    add[key] = value;

                    setContact({ ...contact, 'address': { ...add } })
                }
                else {

                    var temp = Object.assign({}, contact)

                    temp.address.geo ? temp.address.geo[key] = value : temp.address = { ...temp.address, 'geo': { [key]: value } };

                    setContact(temp)

                }

            } else
                if (!(key === 'lat' || key === 'lng'))

                    setContact({ ...contact, 'address': { [key]: value } })
                else
                    setContact({ ...contact, 'address': { 'geo': { [key]: value } } })

        }
        else
            if (!(key === 'lat' || key === 'lng'))

                setContact({ ...contact, 'address': { [key]: value } })
            else
                setContact({ ...contact, 'address': { 'geo': { [key]: value } } })


    }

    const setCompany = (e) => {

        let key = e.target.name;
        let value = e.target.value;

        if (contact) {
            if (contact.company) {
                let company = Object.assign({}, contact.company)
                company[key] = value;
                setContact({ ...contact, 'company': { ...company } })
            }
            else
                setContact({ ...contact, 'company': { [key]: value } })
        }
        else
            setContact({ ...contact, 'company': { [key]: value } })

    }

    const saveDetails = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', contact)
            .then(res => {

                setData([...data, contact])
                setDisplayAddContactBox(false)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="add-contact-wrapper">

            <div className="container">
                <div className="row">
                    <div className="col">Name:</div>       <div className="col"> <input type='text' name="name" onChange={(e) => setContact({ ...contact, 'name': e.target.value })} /> </div>
                </div>
                <div className="row">
                    <div className="col">Username:</div>    <div className="col"> <input type='text' name="username" onChange={(e) => setContact({ ...contact, 'username': e.target.value })} /> </div>
                </div>
                <div className="row">
                    <div className="col">Email:</div>       <div className="col"> <input type='text' name="email" onChange={(e) => setContact({ ...contact, 'email': e.target.value })} /> </div>
                </div>
                <div className="row">
                    <div className="col">Street:</div>     <div className="col"> <input type='text' name="street" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Suite:</div>     <div className="col"> <input type='text' name="suite" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">City:</div>    <div className="col"> <input type='text' name="city" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Zipcode:</div>     <div className="col"> <input type='text' name="zipcode" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Lat:</div>     <div className="col"> <input type='text' name="lat" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Lon:</div>     <div className="col"> <input type='text' name="lng" onChange={(e) => setAddress(e)} /> </div>
                </div>
                <div className="row">
                    <div className="col">phone:</div>    <div className="col"> <input type='text' name="phone" onChange={(e) => setContact({ ...contact, 'phone': e.target.value })} /></div>
                </div>
                <div className="row">
                    <div className="col">Website:</div>    <div className="col"> <input type='text' name="website" onChange={(e) => setContact({ ...contact, 'website': e.target.value })} /></div>
                </div>
                <div className="row">
                    <div className="col">Company Name:</div>    <div className="col"> <input type='text' name="name" onChange={(e) => setCompany(e)} /></div>
                </div>
                <div className="row">
                    <div className="col">Catch phrase:</div>    <div className="col"> <input type='text' name="catchPhrase" onChange={(e) => setCompany(e)} /></div>
                </div>
                <div className="row">
                    <div className="col">bs:</div>    <div className="col"> <input type='text' name="bs" onChange={(e) => setCompany(e)} /></div>
                </div>
            </div>

            <button className="save-button" onClick={saveDetails} >Save</button>
            <button className="save-button" onClick={() => setDisplayAddContactBox(false)} >Cancel</button>

        </div>
    )
}
export default AddContact;