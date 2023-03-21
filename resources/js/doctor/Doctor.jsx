import Content from "./Components/Content/Content";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./Components/UserContext/UserContext";
import axios from "axios";

function Doctor() {
    const [user, setUser] = useState(null);

    const getUserInformation = async () => {
        try {
            const response = await fetch("/api/user");
            const dataUser = await response.json();
            setUser(dataUser);
        } catch (error) {
            setUser(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getUserInformation();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, getUserInformation }}>
            <BrowserRouter>
                {console.log(user)}
                <Navbar />
                <Content />
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default Doctor;
