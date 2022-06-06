import Navbar from "./Navbar";

import "../css/Header.css"
import { useNavigate } from "react-router";

const Header = ({
    scrollToPrices,
    scrollToContact,
    scrollToEstimate,
    setToggleArrow
}) => {
    return (
        <div className="header_main">
            <div>
                <div className="header_title-navbar">
                    <h1>
                        Cj's Cleaning
                    </h1>
                    <Navbar
                        scrollToPrices={scrollToPrices}
                        scrollToContact={scrollToContact}
                        scrollToEstimate={scrollToEstimate}
                        setToggleArrow={setToggleArrow}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;