import { Link } from "react-router-dom";

import "../css/Footer.css"

const Footer = () => {
    return (
        <div className="footer_main">
            <div>
                <h2>Cj's Carpet Cleaning</h2>
                <p>
                    We would like to give special thank you
                    <br />
                    to our loyal customers who kept
                    <br />
                    the bussiness running for 27 years. 
                    <br />
                    We hope to expand further and modernize
                    <br />
                    along the way. And to our new customers,
                    <br />
                    welcome to the family. 
                </p>
            </div>
            <div className="footer_quick-links">
                <h2>Quick Links</h2>
                <span>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/prices">
                        Prices
                    </Link>
                </span>
                <span>
                    <Link to="/contact">
                        Contact
                    </Link>
                    <Link to="/estimate">
                        Estimate
                    </Link>
                </span>
                
                <p>
                    Disclaimer: Photo displays throughout
                    <br/>
                    the website is for aesthetic purpose only. 
                </p>
            </div>
            <div>
                <h2>Opening Hours</h2>
                <p>Mon - Sat</p>
                <p>8:00 a.m. - 5:00 p.m</p>
            </div>
            <div>
                <h2>Contact Info</h2>
                <p>Palm Coast, FL - 32164</p>
                <p>(386) - 627 - 0794</p>
            </div>
        </div>
    )
}

export default Footer;