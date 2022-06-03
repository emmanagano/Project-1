import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact";
import Estimate from "./components/Estimate";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home"
import Prices from "./components/Prices";
import Success from "./components/Success";

import "./css/App.css";

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/prices"
                    element={<Prices />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/estimate"
                    element={<Estimate />}
                />
                <Route
                    path="/success"
                    element={<Success />}
                />
            </Routes>
            {/* <Footer /> */}
        </>
    )
}

export default App;