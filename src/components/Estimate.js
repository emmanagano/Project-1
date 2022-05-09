import "../css/Estimate.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Estimate = () => {
    const form = useRef();
    const navigate = useNavigate();
    const estimateHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = await emailjs.sendForm(
                "service_hbv60tk", "template_big0stl", form.current, "Tlb6mCKWYhrLye3tR"
            );
            console.log(resp);
            if(resp.status === 200){
                navigate("/success");
            }
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className="estimate_main">
            <h1>We'll give you an estimate</h1>
            <form 
                className="estimate_content"
                onSubmit={estimateHandler}
                ref={form}
            >
                <div className="estimate_contact-info">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first-name"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last-name"
                    />
                    <input
                        type="text"
                        placeholder="Contact #"
                        name="contact-number"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <input
                    type="text" 
                    placeholder="Street Name"
                    name="street-name"
                />
                <div className="estimate_city-zip">
                    <input 
                        type="text"
                        placeholder="Apt.#"
                        name="apt"
                    />
                    <input 
                        type="text"
                        placeholder="City"
                        name="city"
                    />
                    <input 
                        type="text"
                        placeholder="Zip"
                        name="zip"
                    />
                </div>
                <input
                    type="number"
                    placeholder="Approx. sqft"
                    name="approx-sqft"
                />
                <select 
                    name="prefer"
                >
                    <option defaultValue>I prefer:</option>
                    <option>text</option>
                    <option>call</option>
                    <option>email</option>
                    <option>any</option>
                </select>
                <h2>Tell us about your carpet</h2>
                <div className="estimate_sofa-carpet">
                    <input
                        type="text"
                        placeholder="Color"
                        name="carpet-color"
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        name="carpet-age"
                    />
                    <input
                        type="text"
                        placeholder="Last Cleaned"
                        name="carpet-last-cleaned"
                    />
                </div>
                <h2>Tell us about your sofa</h2>
                <div className="estimate_sofa-carpet">
                    <input
                        type="text"
                        placeholder="Color"
                        name="sofa-color"
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        name="sofa-age"
                    />
                    <input
                        type="text"
                        placeholder="Last Cleaned"
                        name="sofa-last-cleaned"
                    />
                </div>
                <h2>When are you available?</h2>
                <div className="estimate_appointment">
                    <input
                        type="text"
                        placeholder="Format: (ex. Oct.25)"
                        name="date"
                    />
                    <input
                        type="text"
                        placeholder="Time"
                        name="time"
                    />
                    <select name="am-pm">
                        <option defaultValue>--day/night--</option>
                        <option>am</option>
                        <option>pm</option>
                    </select>
                </div>
                <button>SEND REQUEST</button>
            </form>
        </div>
    )
}

export default Estimate;