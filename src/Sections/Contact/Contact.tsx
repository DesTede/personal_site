import React, {useState} from "react";
import emailjs from "emailjs-com"
import {Button, FormControl, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import "./Contact.css";
import ScrollReveal from "../../Hooks/ScrollReveal";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = ()=> {
    // const [formData, setFormData] = useState({name: "", email: "", message:""});
    const [status, setStatus] = useState<string | null>(null);
    const {register, handleSubmit, reset, formState:{errors}} = useForm<FormData>({mode:"onChange"})
    
    
    const onSubmit = (data: FormData)=> {
        // e.preventDefault();

        const serviceId = "service_8ms886o"
        const templateId = "template_igj9fbp"
        const publicKey = "vjb14JMG4iXgWfwrQ"

        emailjs.send(serviceId, templateId, data, publicKey)
            .then(() => {
                setStatus("Success! Your message has been sent.");
                reset({
                    name: '',
                    email: '',
                    message: ''
                });
                
            // setFormData({name: "", email: "", message: ""}) 
                
        })
            .catch(() => {
            setStatus("Error! Please try again.");
        });
        
    };
    
    
    
    return (
        <div className="Contact" >
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <FormControl  >
                    <ScrollReveal>
                    <div className={"contact-main-header"} >Reach out.</div>
                    </ScrollReveal>
                    <ScrollReveal>
                    <div className={"contact-sub-header"}>If you have any questions or just want to say hi (or even share your best dad joke), feel free to reach out—I'm all ears! </div>
                    </ScrollReveal>
                    
                    <TextField 
                        className={"TextField"}
                        variant={"outlined"}
                        name={"name"}
                        label={"Full name"}
                        
                        InputProps={{
                            style: {
                                borderRadius:'15px'
                            }
                    }}
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
                        
                        InputProps={{
                            style: {
                                borderRadius:'15px'
                            }
                        }}
                        id={"email"}
                        {...register('email',
                            { required: true,
                                minLength: 2,
                                maxLength: 100 
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? "Email must be between 2 and 100 characters" : ""}
                    />
                    <TextField
                        className={"TextField"}
                        variant={"outlined"}
                        label={"Message"}
                        InputProps={{
                            style: {
                                borderRadius:'15px'
                            }
                        }}
                        id={"message"}
                        {...register('message',
                            { required: true,
                                minLength: 2,
                                maxLength: 100
                        })}

                        error={!!errors.message}
                        helperText={errors.message ? "message must be between 2 and 100 characters" : ""}
                    />
                    <Button type={"submit"} variant={"contained"} color={"primary"} sx={{borderRadius:'15px', backgroundColor: 'black'}} >
                        Submit
                    </Button>
                </FormControl>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
}

export default Contact;