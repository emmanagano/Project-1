import "../css/Estimate.css";

const Estimate = () => {
    return (
        <div className="estimate_main">
            <h1>We'll give you an estimate</h1>
            <div className="estimate_content">
                <div className="estimate_contact-info">
                    <input
                        placeholder="First Name"
                    />
                    <input
                        placeholder="Last Name"
                    />
                    <input
                        placeholder="Contact #"
                    />
                    <input
                        placeholder="Email"
                    />
                </div>
                <input 
                    placeholder="Street Name"
                />
                <div className="estimate_city-zip">
                    <input 
                        placeholder="City"
                    />
                    <input 
                        placeholder="Zip"
                    />
                </div>
                <input
                    placeholder="Approx. sqft"
                />
                <h2>Tell us about your carpet</h2>
                <div className="estimate_sofa-carpet">
                    <input
                        placeholder="Color"
                    />
                    <input
                        placeholder="Age"
                    />
                    <input
                        placeholder="Last Cleaned"
                    />
                </div>
                <h2>Tell us about your sofa</h2>
                <div className="estimate_sofa-carpet">
                    <input
                        placeholder="Color"
                    />
                    <input
                        placeholder="Age"
                    />
                    <input
                        placeholder="Last Cleaned"
                    />
                </div>
                <h2>When are you available?</h2>
                <div className="estimate_appointment">
                    <input
                        placeholder="Format: (ex. Oct.25)"
                    />
                    <input
                        placeholder="Time"
                    />
                    <select>
                        <option selected>--day/night--</option>
                        <option>am</option>
                        <option>pm</option>
                    </select>
                </div>
                <button>SEND REQUEST</button>
            </div>
        </div>
    )
}

export default Estimate;