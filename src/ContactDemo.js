import { useEffect, useRef } from "react";

const ContactDemo = ({ selectedContact, screenX, screenY, setDisplaySelectedContactBox }) => {

    const demo_rapper = useRef();

    useEffect(() => {

        demo_rapper.current.style.top = (screenY - 80)?.toString() + 'px';
        demo_rapper.current.style.left = screenX?.toString() + 'px';


    }, [screenX, screenY])


    return (
        <div ref={demo_rapper} className="contact-demo-wrapper" onMouseEnter={() => setDisplaySelectedContactBox(true)} onMouseLeave={() => setDisplaySelectedContactBox(false)}>

            <div className="container">
                <div className="row">
                    <div className="col">Name:</div>       <div className="col"> <input type='text' value={selectedContact?.name} /> </div>
                </div>
                <div className="row">
                    <div className="col">Username:</div>   <div className="col">{selectedContact?.username}</div>
                </div>
                <div className="row">
                    <div className="col">Email:</div>      <div className="col">{selectedContact?.email}</div>
                </div>
                <div className="row">
                    <div className="col">Street:</div>    <div className="col">{selectedContact?.address.street}</div>
                </div>
                <div className="row">
                    <div className="col">Suite:</div>    <div className="col">{selectedContact?.address.suite}</div>
                </div>
                <div className="row">
                    <div className="col">City:</div>    <div className="col">{selectedContact?.address.city}</div>
                </div>
                <div className="row">
                    <div className="col">Zipcode:</div>    <div className="col">{selectedContact?.address.zipcode}</div>
                </div>
                <div className="row">
                    <div className="col">phone:</div>    <div className="col">{selectedContact?.phone}</div>
                </div>
                <div className="row">
                    <div className="col">Website:</div>    <div className="col">{selectedContact?.website}</div>
                </div>
                <div className="row">
                    <div className="col">Company Name:</div>    <div className="col">{selectedContact?.company.name}</div>
                </div>
                <div className="row">
                    <div className="col">Catch phrase:</div>    <div className="col">{selectedContact?.company.catchPhrase}</div>
                </div>
                <div className="row">
                    <div className="col">bs:</div>    <div className="col">{selectedContact?.company.bs}</div>
                </div>

            </div>

        </div>
    )
}
export default ContactDemo;