import Contact_card from "../components/Contact_card"

export default function Contact_fixed({onClick}) {
    return (

        <div className="contact_fixed">
            <div className="contact_back" onClick={onClick}></div>
            <Contact_card/>
        </div>
        
    )
}
