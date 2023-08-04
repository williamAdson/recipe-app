import { FaPhone, FaEnvelope } from "react-icons/fa";

const Phone = ({selected = false, onSelect=f=>f}) => (
    <FaPhone 
        color={selected? "red": "grey"}
        onClick={onSelect} 
    />
)
const Email = ({selected = false}) => (
    <FaEnvelope color={selected? "red": "grey"} />
)
function Contact(){
    
    return (
        <div className="front-contact">
            <Phone/>
            <Email />
        </div>
    )
}

export default Contact;