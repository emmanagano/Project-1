import { Link } from "react-router-dom";

import "../css/Navbar.css";

const Navbar = ({
    scrollToPrices,
    scrollToContact,
    scrollToEstimate,
    setToggleArrow
}) => {
    return (
        <div className="navbar_links">
            <button
                onClick={() => {
                    scrollToPrices.current.scrollIntoView()
                }}
            > 
                Prices
            </button>
            <button
                onClick={() => {
                    scrollToContact.current.scrollIntoView()
                }}
            >
                Contact
            </button>
            <button
                onClick={() => {
                    scrollToEstimate.current.scrollIntoView();
                    setToggleArrow(true)
                }}
            >
                Estimate
            </button>
        </div>
    )
}

export default Navbar;