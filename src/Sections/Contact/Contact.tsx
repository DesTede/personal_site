import React, {useState} from "react";
import emailjs from "emailjs-com"


const Contact = ()=> {
    const [formData, setFormData] = useState({name: "", email: "", message:""});
    const [status, setStatus] = useState(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        const serviceId = "service_8ms886o"
        const templateId = "template_igj9fbp"
        const publicKey = "vjb14JMG4iXgWfwrQ"

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then((response) => {
            setStatus("Success! Your message has been sent.")
            setFormData({name: "", email: "", message: ""}) 
        })
            .catch((error) => {
            setStatus("Error! Please try again.");
        })
        
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type={"text"} name={"name"} value={formData.name} onChange={handleChange} required={true}/>
            </label>
            
            <label>
                Email:
                <input type={"email"} name={"email"} value={formData.email} onChange={handleChange} required={true}/>
            </label>
            
            <label>
                Message:
                <input type={"text"} name={"message"} value={formData.message} onChange={handleChange} minLength={20} required={true}/>
            </label>
            
            <button type={"submit"}>
                Submit
            </button>
            {status && <p>{status}</p>}
        </form>
    );
}

export default Contact;