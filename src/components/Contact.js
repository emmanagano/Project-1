import "../css/Contact.css";

const Contact = () => {
    return (
        <div className="contact_main">
            <h1>We'd love to hear from you</h1>
            <div className="contact_content">
                <div className="contact_info">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Contact #"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <select>
                        <option selected>I prefer:</option>
                        <option>text</option>
                        <option>call</option>
                        <option>email</option>
                        <option>any</option>
                    </select>
                </div>
                <div>
                    <textarea 
                        placeholder="Message"
                    />
                </div>
                <button>
                    SEND REQUEST
                </button>
            </div>
        </div>
    )
}

export default Contact;