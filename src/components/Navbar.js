import { Link } from "react-router-dom";

import "../css/Navbar.css";

const Navbar = ({
    togglePrices, 
    setTogglePrices,
    toggleContact,
    setToggleContact
}) => {
    return (
        <div className="navbar_links">
            <button
                value={togglePrices}
                onClick={() => {
                    setTogglePrices(!togglePrices)
                }}
            > 
                Prices
            </button>
            <button
                value={toggleContact}
                onClick={() => {
                    setToggleContact(!toggleContact)
                }}
            >
                Contact
            </button>
            <button>
                Estimate
            </button>
        </div>
    )
}

export default Navbar;