import Navbar from "./Navbar";

import "../css/Header.css"

const Header = () => {
    return (
        <div className="header_main">
            <div>
                <div className="header_title-navbar">
                    <h1>Cj's Cleaning</h1>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Header;