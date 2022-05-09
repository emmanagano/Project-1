import "../css/Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const contactHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = await emailjs.sendForm(
                "service_ojwf2un", "template_g6or5fk", form.current, "Tlb6mCKWYhrLye3tR"
            );
            if(resp.status === 200) {
                navigate("/success");
            };
        } catch (error) {
            throw error;
        }
    };
    return (
        <div className="contact_main">
            <h1>We'd love to hear from you</h1>
            <form 
                className="contact_content"
                ref={form}
                onSubmit={contactHandler}
            >
                <div className="contact_info">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="customer_first-name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="customer_last-name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Contact #"
                            name="customer_contact-number"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            name="customer_email-address"
                        />
                    </div>
                </div>
                <div>
                    <select 
                        name="customer_contact-prefer"
                    >
                        <option defaultValue>I prefer:</option>
                        <option>text</option>
                        <option>call</option>
                        <option>email</option>
                        <option>any</option>
                    </select>
                </div>
                <div>
                    <textarea 
                        placeholder="Message"
                        name="customer_message"
                    />
                </div>
                <button>
                    SEND REQUEST
                </button>
            </form>
        </div>
    )
}

export default Contact;