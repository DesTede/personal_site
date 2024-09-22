import React, {useState} from "react";
import emailjs from "emailjs-com"
import {Button, FormControl, FormLabel, TextField} from "@mui/material";


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
        
    }
    
    
    return (
        <div className="Contact" >
            <FormControl>
                <FormLabel>Reach out</FormLabel>
                <TextField 
                    className={"TextField"}
                    variant={"outlined"}
                    label={"Full name"}
                    id={"name"}
                    value={formData.name}
                    onBlur={handleChange}
                    required={true}
                />
                <TextField 
                    className={"TextField"}
                    variant={"outlined"}
                    label={"Email"}
                    id={"email"}
                    value={formData.email}
                    onBlur={handleChange}
                    required={true}
                />
                <TextField
                    className={"TextField"}
                    variant={"outlined"}
                    label={"Message"}
                    id={"message"}
                    value={formData.message}
                    onBlur={handleChange}
                    required={true}
                />
                <Button type={"submit"} variant={"contained"} color={"primary"} >
                    Submit
                </Button>
            </FormControl>
        </div>
    );
}

export default Contact;