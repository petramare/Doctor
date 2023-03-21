import Content from './Components/Content/Content';
import Navbar from './Components/navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/Landingpage";
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './Components/UserContext/UserContext';

function Doctor() {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>

                <Navbar />
                <Content />
                <Footer />

            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default Doctor