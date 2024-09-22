import React, {useState} from "react";
import emailjs from "emailjs-com"
import {Button, FormControl, FormLabel, TextField} from "@mui/material";
import {useForm, useFormState} from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = ()=> {
    // const [formData, setFormData] = useState({name: "", email: "", message:""});
    const [status, setStatus] = useState(null);
    const {register, handleSubmit, setError,formState:{errors}} = useForm<FormData>({mode:"onChange"})
    
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    //     const {name, value} = e.target;
    //     setFormData({...formData, [name]: value});
    // };
    
    const onSubmit = (data: FormData)=> {
        // e.preventDefault();

        const serviceId = "service_8ms886o"
        const templateId = "template_igj9fbp"
        const publicKey = "vjb14JMG4iXgWfwrQ"

        emailjs.send(serviceId, templateId, data, publicKey)
            .then(() => {
            setStatus("Success! Your message has been sent.")
            // setFormData({name: "", email: "", message: ""}) 
        })
            .catch(() => {
            setStatus("Error! Please try again.");
        });
        
    }
    
    
    return (
        <div className="Contact" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl  >
                    <FormLabel >Reach out</FormLabel>
                    
                    <TextField 
                        className={"TextField"}
                        variant={"outlined"}
                        name={"name"}
                        label={"Full name"}
                        id={"name"}
                        {...register('name',
                            { required: true,
                                minLength: 2,
                                maxLength: 100 })}
                        
                        error={!!errors.name}
                        helperText={errors.name ? "Full name must be between 2 and 100 characters" : ""}
                    />
                    <TextField 
                        className={"TextField"}
                        variant={"outlined"}
                        label={"Email"}
                        id={"email"}
                        {...register('email',
                            { required: true,
                                minLength: 2,
                                maxLength: 100 })}

                        error={!!errors.name}
                        helperText={errors.name ? "email must be between 2 and 100 characters" : ""}
                    />
                    <TextField
                        className={"TextField"}
                        variant={"outlined"}
                        label={"Message"}
                        id={"message"}
                        {...register('message',
                            { required: true,
                                minLength: 2,
                                maxLength: 100 })}

                        error={!!errors.name}
                        helperText={errors.name ? "message must be between 2 and 100 characters" : ""}
                    />
                    <Button type={"submit"} variant={"contained"} color={"primary"}  >
                        Submit
                    </Button>
                </FormControl>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
}

export default Contact;