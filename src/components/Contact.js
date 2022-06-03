import "../css/Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

const Contact = ({setToggleContact}) => {
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
        <>
            
            
            <div className="contact_main">
                {/* <div className="close-contact-btn">
                    <GrClose 
                        onClick={()=> {
                            setToggleContact(false)
                        }}
                    />
                </div> */}
                <div class="custom-shape-divider-top-1654296637">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <form 
                    className="contact_content"
                    ref={form}
                    onSubmit={contactHandler}
                >
                    <div className="contact_info">
                        <span>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="customer_first-name"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="customer_last-name"
                            />
                        </span>
                        <span>
                            <input
                                type="text"
                                placeholder="Contact #"
                                name="customer_contact-number"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="customer_email-address"
                            />
                        </span>
                    </div>
                    <div className="contact_prefer-container">
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
                    <div className="contact_message-button">
                        <textarea 
                            placeholder="Message"
                            name="customer_message"
                        />
                        <button>
                            SEND REQUEST
                        </button>
                    </div>
                </form>
                <div className="contact-intro">
                    <h1>Contact Us</h1>
                    <p>
                        If you have any questions regarding 
                        <br/>
                        our <span>services</span>
                        <br/>
                        or would like to make an <span>appointment</span>,
                        <br/> 
                        let us know.
                        <br/>
                        We'll get back to you as soon as we can.
                    </p>
                </div>
                <div class="custom-shape-divider-bottom-1654296744">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Contact;