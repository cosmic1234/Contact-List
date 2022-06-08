import { useEffect, useRef, useState } from "react";

const ContactDemo = ({ selectedContact, screenX, screenY, setDisplaySelectedContactBox, updateContact }) => {

    const demo_rapper = useRef();
    const [name, setName] = useState(selectedContact.name);
    const [username, setUsername] = useState(selectedContact.username);
    const [email, setEmail] = useState(selectedContact.email);
    const [phone, setPhone] = useState(selectedContact.phone);
    const [website, setWebsite] = useState(selectedContact.website);
    const [companyName, setCompanyName] = useState(selectedContact.company.name);
    const [companyBS, setCompanyBS] = useState(selectedContact.company.bs);
    const [catchPhrase, setCatchPhrase] = useState(selectedContact.company.catchPhrase);
    const [street, setStreet] = useState(selectedContact.address.street);
    const [suite, setSuite] = useState(selectedContact.address.suite);
    const [city, setCity] = useState(selectedContact.address.city);
    const [zipcode, setZipcode] = useState(selectedContact.address.zipcode);
    const [lat, setLat] = useState(selectedContact.address.geo.lat);
    const [lng, setLng] = useState(selectedContact.address.geo.lng);

    const resetContactDetails = () => {

        setName(selectedContact.name);
        setUsername(selectedContact.username);
        setEmail(selectedContact.email);
        setPhone(selectedContact.phone);
        setWebsite(selectedContact.website);
        setCatchPhrase(selectedContact.company.catchPhrase);
        setCompanyName(selectedContact.company.name);
        setCompanyBS(selectedContact.company.bs);
        setStreet(selectedContact.address.street);
        setSuite(selectedContact.address.suite);
        setCity(selectedContact.address.city);
        setZipcode(selectedContact.address.zipcode);
        setLat(selectedContact.address.geo.lat);
        setLng(selectedContact.address.geo.lng);
    }

    const saveDetails = () => {

        let updatedContact =
        {
            "id": selectedContact.id,
            "name": name,
            "username": username,
            "email": email,
            "address": {
                "street": street,
                "suite": suite,
                "city": city,
                "zipcode": zipcode,
                "geo": {
                    "lat": lat,
                    "lng": lng
                }
            },
            "phone": phone,
            "website": website,
            "company": {
                "name": companyName,
                "catchPhrase": catchPhrase,
                "bs": companyBS
            }
        }



        updateContact(updatedContact)
    }



    useEffect(() => {

        demo_rapper.current.style.top = (screenY - 80)?.toString() + 'px';
        demo_rapper.current.style.left = screenX?.toString() + 'px';


    }, [screenX, screenY])


    return (
        <div ref={demo_rapper} className="contact-demo-wrapper" onMouseEnter={() => setDisplaySelectedContactBox(true)} onMouseLeave={() => setDisplaySelectedContactBox(false)}>

            <div className="container">
                <div className="row">
                    <div className="col">Name:</div>       <div className="col"> <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Username:</div>   <div className="col"><input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Email:</div>      <div className="col"><input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Street:</div>    <div className="col"><input type='text' name='street' value={street} onChange={(e) => setStreet(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Suite:</div>    <div className="col"><input type='text' name='suite' value={suite} onChange={(e) => setSuite(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">City:</div>    <div className="col"><input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Zipcode:</div>    <div className="col"><input type='text' name='zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Lat:</div>    <div className="col"><input type='text' name='lat' value={lat} onChange={(e) => setLat(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Long:</div>    <div className="col"><input type='text' name='lng' value={lng} onChange={(e) => setLng(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">phone:</div>    <div className="col"><input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Website:</div>    <div className="col"><input type='text' name='website' value={website} onChange={(e) => setWebsite(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Company Name:</div>    <div className="col"><input type='text' name='name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">Catch phrase:</div>    <div className="col"><input type='text' name='catchPhrase' value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} /> </div>
                </div>
                <div className="row">
                    <div className="col">bs:</div>    <div className="col"><input type='text' name='bs' value={companyBS} onChange={(e) => setCompanyBS(e.target.value)} /> </div>
                </div>
            </div>

            <button className="save-button" onClick={saveDetails} >Save</button>
            <button className="save-button" onClick={resetContactDetails} >Cancel</button>

        </div>
    )
}
export default ContactDemo;