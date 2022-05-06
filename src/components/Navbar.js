import { Link } from "react-router-dom";

import "../css/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar_links">
            <Link to="/">
                HOME
            </Link>
            <Link to="/prices">
                PRICES
            </Link>
            <Link to="/contact">
                CONTACT
            </Link>
            <Link to="/estimate">
                ESTIMATE
            </Link>
        </div>
    )
}

export default Navbar;