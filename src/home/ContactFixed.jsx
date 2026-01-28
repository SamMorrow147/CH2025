import ContactCard from "../components/Contact_card"
import { useNavigate } from 'react-router-dom';

export default function ContactFixed() {

    const history = useNavigate();


    const removeActive = () => {
        history('/')
      }


    return (

        <div className="contact_fixed">
            <div className="contact_back" onClick={removeActive}></div>
            <ContactCard/>
        </div>
        
    )
}
