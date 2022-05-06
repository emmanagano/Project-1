import "../css/Home.css";

import "../images/pre-vacuum.jpg";
import {AiOutlineArrowRight} from "react-icons/ai"

const Home = () => {
    return (
    <div className="home_main">
        <div className="home_welcome">
            <img 
                src={require("../images/welcome.jpg")}
            />
            <div className="home_owner-info">
                <span>
                    <p>Carlos J. Vega</p>
                    <p>(386) - 627 - 0794</p>
                    <p>Palm Coast, FL - 32164</p>
                </span>
                
            </div>
        </div>
        <div className="home_guarantee">
            <h2>
                Truck Mounted Cleaning System
            </h2>
            <h2>License and Insured</h2>
            <h2>Free Estimates</h2>
            <h2>
                No Hidden Charges
                Guaranteed
            </h2>
        </div>
        <div 
            className="home_cleaning-process"
        >
            <h1 className="home_title">
                Process
            </h1>
            <div 
                className="home_cleaning-steps"
            >
                
                <span>
                    <img src={require("../images/pre-vacuum.jpg")}/>
                    <p>Pre-Vacuum</p>
                </span>
                <AiOutlineArrowRight/>
                <span>
                    <img src={require("../images/pre-spotting.jpg")}/>
                    <p>Pre-Spotting</p>
                </span>
                <AiOutlineArrowRight/>
                <span>
                    <img src={require("../images/deep-steam.jpg")}/>
                    <p>Deep Steam Extraction</p>
                </span>
                <AiOutlineArrowRight/>
                <span>
                    <img src={require("../images/quick-dry.jpg")}/>
                    <p>Quick Dry</p>
                </span>
            </div>
        </div>
        <h1 className="home_title">
            Services
        </h1>
        <div className="home_services">
            <div>
                <img src={require("../images/tile.jpg")}/>
                <h2>Tile & Grout Cleaning</h2>
            </div>
            <div>
                <img src={require("../images/pet-stain.jpg")}/>
                <h2>
                    Pet Stain Removal
                </h2>
            </div>
            <div>
                <img src={require("../images/odor.jpg")}/>
                <h2>
                    Odor Removal
                </h2>
            </div>
            <div>
                <img src={require("../images/stain.jpg")}/>
                <h2>
                    Stain Protection 
                </h2>
            </div>
            <div>
                <img src={require("../images/flood.jpg")}/>
                <h2>Flood Extraction</h2>
            </div>
            <div>
                <img src={require("../images/rug.jpg")}/>
                <h2>
                    Rug Cleaning
                </h2>
            </div>
            <div>
                <img src={require("../images/repair.jpg")}/>
                <h2>
                    Carpet Repair, 
                    <br/>
                    Stretching & Removal
                </h2>
            </div>
            <div>
                <img src={require("../images/car.jpg")}/>
                <h2>
                    Automobile Upholstery 
                    <br/>
                    Cleaning
                </h2>
            </div>
            <div>
                <img src={require("../images/upholstery.jpg")}/>
                <h2>
                    Home Upholstery
                    <br/>
                    Cleaning
                </h2>
            </div>
        </div>
    </div>)
}

export default Home;
