import React from "react";
import Homenavbar from "./Homenavbar";
import Doctornavbar from "./Doctornavbar";
import Patientnavbar from "./Patientnavbar";
import Managernavbar from "./Managernavbar";



export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">CalenDr</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Homenavbar />
                        <Doctornavbar />
                        <Patientnavbar />
                        <Managernavbar/>
                    </ul>
                </div>
            </nav>
        </>
    )
}
