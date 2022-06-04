import { useEffect, useRef } from "react";

const ContactDemo = ({ selectedContact, screenX, screenY }) => {

    const demo_rapper = useRef();

    // useEffect(() => {

    //     demo_rapper.current.style.top = (screenY - 50)?.toString() + 'px';
    //     demo_rapper.current.style.left = screenX?.toString() + 'px';


    // }, [screenX, screenY])


    return (
        <div ref={demo_rapper} className="contact-demo-wrapper">

            <div className="container">
                <div className="row">
                    <div className="col">Name:</div>       <div className="col">{selectedContact?.name}</div>
                </div>
                <div className="row">
                    <div className="col">Username:</div>   <div className="col">{selectedContact?.username}</div>
                </div>
                <div className="row">
                    <div className="col">Email:</div>      <div className="col">{selectedContact?.email}</div>
                </div>
                <div className="row">
                    <div className="col">Address:</div>    <div className="col">{selectedContact?.address.street}</div>
                </div>
            </div>

        </div>
    )
}
export default ContactDemo;