import "../css/Home.css";
import "../images/pre-vacuum.jpg";
import {AiOutlineArrowRight} from "react-icons/ai"
import Header from "./Header";
import {GiVacuumCleaner, GiSteam} from "react-icons/gi";
import {FaSprayCan} from "react-icons/fa";
import {BsWind} from "react-icons/bs";
import Footer from "./Footer";
import { useState } from "react";
import Prices from "./Prices";
import Contact from "./Contact";
const Home = () => {
    const [togglePrices, setTogglePrices] = useState(false);
    const [toggleContact, setToggleContact] = useState(false);
    return (
    <>
        <div className="toggles-container">
            {togglePrices &&
                <Prices 
                    setTogglePrices={setTogglePrices}
                />
            }
        </div>
        <div 
            className="home_main"
            style={{
                display: togglePrices || toggleContact ? "none" : ""
            }}
        >
            
            <div className="home_welcome">
                <img 
                    src={require("../images/pre-vacuum.jpg")}
                />
                <div className="home_owner-info">
                    <Header 
                        togglePrices={togglePrices}
                        setTogglePrices={setTogglePrices}
                        toggleContact={toggleContact}
                        setToggleContact={setToggleContact}
                    />
                    <span>
                        <p>Carlos J. Vega</p>
                        <p>(386) - 627 - 0794</p>
                        <p>Palm Coast, FL - 32164</p>
                    </span>
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
                </div>
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
                    <div class="custom-shape-divider-top-1653775280">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <span>
                        <GiVacuumCleaner />
                        <p>Pre-Vacuum</p>
                    </span>
                    <AiOutlineArrowRight/>
                    <span>
                        <FaSprayCan />
                        <p>Pre-Spotting</p>
                    </span>
                    <AiOutlineArrowRight/>
                    <span>
                        <GiSteam />
                        <p>Deep Steam Extraction</p>
                    </span>
                    <AiOutlineArrowRight/>
                    <span>
                        <BsWind />
                        <p>Quick Dry</p>
                    </span>
                </div>
            </div>
            <h1 className="home_services-title">
                Services
            </h1>
            <div className="home_services">
                <div>
                    <img src={require("../images/tile.jpg")}/>
                    <span>
                        <h3>We Clean</h3>
                        <ul>
                            <li>Tile & Grout</li>
                            <li>Rug</li>
                            <li>Carpet</li>
                            <li>Home / Automobile Upholstery</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <span>
                        <h3>Other Services</h3>
                        <ul>
                            <li>Pet Stains / Odor Removal</li>
                            <li>Flood Extraction</li>
                            <li>Stain Protection</li>
                            <li>Carpet | Strectching, Repair, & Removal</li>
                        </ul>
                    </span>
                    <img src={require("../images/pet-stain.jpg")}/>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    </>)
}

export default Home;