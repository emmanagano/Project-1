import "../css/Prices.css";
import {GrClose} from "react-icons/gr";

const Prices = ({setTogglePrices}) => {
    return (
        <div className="prices_main">
            <div className="close-btn-container">
                <GrClose 
                    onClick={() => {
                        setTogglePrices(false)
                    }}
                />
            </div>
            <div className="prices_content">
                <div>
                    <h3>3 Rooms</h3>
                    <p>Hallway & Deodorizer</p>
                    <h4>$79.95</h4>
                </div>
                <div>
                    <h3>5 Rooms</h3>
                    <p>Hallway & Deodorizer</p>
                    <h4>$119.95</h4>
                </div>
                <div>
                    <h3>Tile & Grout</h3>
                    <p>Cleaning & Sealing</p>
                    <h4>$60 / sqft.</h4>
                </div>
                <div>
                    <h3>Sofa / 2 Rooms</h3>
                    <p>Free Deodorizer</p>
                    <h4>$59.95</h4>
                </div>
            </div>
        </div>
    )
}

export default Prices;