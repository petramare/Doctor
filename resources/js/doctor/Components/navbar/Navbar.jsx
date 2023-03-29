import React, { useContext, useEffect, useState } from "react";
import Homenavbar from "./Homenavbar";
import Doctornavbar from "./Doctornavbar";
import Patientnavbar from "./Patientnavbar";
import Managernavbar from "./Managernavbar";
import UserContext from "../UserContext/UserContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { user } = useContext(UserContext);
    const [navbar, setNavbar] = useState(<Homenavbar />);

    useEffect(() => {
        if (user) {
            switch (user.role) {
                case "doctor":
                    setNavbar(<Doctornavbar />);
                    break;
                case "patient":
                    setNavbar(<Patientnavbar />);
                    break;
                case "manager":
                    setNavbar(<Managernavbar />);
                    break;
                default:
                    setNavbar(<Homenavbar />);
                    break;
            }
        } else {
            setNavbar(<Homenavbar />);
        }
    }, [user]);

    return (
        <>
            <nav className="navbar navbar-expand-lg px-4">
                <Link to="/" className="navbar-brand navbar-brand-text">
                    <img
                        className="mr-2"
                        src="img/icons8-calendar-64.png"
                        alt=""
                    />
                    CalenDr.
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">{navbar}</ul>
                </div>
            </nav>
        </>
    );
}
