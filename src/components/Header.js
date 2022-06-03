import Navbar from "./Navbar";

import "../css/Header.css"
import { useNavigate } from "react-router";

const Header = ({
    togglePrices, 
    setTogglePrices,
    toggleContact,
    setToggleContact
}) => {
    return (
        <div className="header_main">
            <div>
                <div className="header_title-navbar">
                    <h1>
                        Cj's Cleaning
                    </h1>
                    <Navbar
                        togglePrices={togglePrices}
                        setTogglePrices={setTogglePrices}
                        toggleContact={toggleContact}
                        setToggleContact={setToggleContact}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;