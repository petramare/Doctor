
import Navbar from './Components/navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/Landingpage";
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './Components/UserContext/UserContext';
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Components/LandingPage/Landingpage"
import RegisterUser from './Components/RegisterUser/RegisterUser';

function Doctor() {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>

                <Navbar />
                <LandingPage />
                <Footer />

            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default Doctor