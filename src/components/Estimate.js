import "../css/Estimate.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {BsArrowRightSquareFill} from "react-icons/bs";

const Estimate = ({scrollToEstimate}) => {
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
        <div 
            className="estimate_main"
            ref={scrollToEstimate}
        >
            <div className="custom-shape-divider-top-1654409543">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <form 
                className="estimate_content"
                onSubmit={estimateHandler}
                ref={form}
            >
                <div className="estimate_contact-info">
                    <input
                        required
                        type="text"
                        placeholder="First Name"
                        name="first-name"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Last Name"
                        name="last-name"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Contact #"
                        name="contact-number"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <h2>
                    Address
                </h2>
                <input
                    required
                    type="text" 
                    placeholder="Street Name"
                    name="street-name"
                />
                <div className="estimate_city-zip">
                    <input
                        required 
                        type="text"
                        placeholder="Apt.#"
                        name="apt"
                    />
                    <input
                        required 
                        type="text"
                        placeholder="City"
                        name="city"
                    />
                    <input
                        required 
                        type="text"
                        placeholder="Zip"
                        name="zip"
                    />
                </div>
                <input
                    required
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
            <div class="custom-shape-divider-bottom-1654409664">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Estimate;