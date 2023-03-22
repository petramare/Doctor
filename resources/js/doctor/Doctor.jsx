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
            const response = await fetch("/api/user", {
                headers: {
                    Accept: "application/json",
                },
            });
            if (response.status === 200) {
                const dataUser = await response.json();
                setUser(dataUser);
                console.log("WE HAVE USER", dataUser);
                return dataUser;
            } else if (response.status === 401) {
                // UNauthenticated
                // ...
            }
        } catch (error) {
            setUser(false);
            console.log(error);
        }

        return false;
    };

    useEffect(() => {
        getUserInformation();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, getUserInformation }}>
            <BrowserRouter>
                <Navbar />
                <Content />
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default Doctor;
