import Logout from "../../Logout/Logout";
import { Link } from "react-router-dom";

export default function Doctornavbar() {
    return (
        <>
            <li className="nav-item active">
                <Link to='/doctor' className="nav-link" >
                    Home
                </Link>
            </li>
            <li className="nav-item active">
                <Link to='/doctor/patientRecords' className="nav-link" >
                    Patient Records
                </Link>
            </li>
            <li className="nav-item active">
                <Link to='/doctor/edit' className="nav-link" >
                    Edit info
                </Link>
            </li>
            <li className="nav-item active">
                < Link to='/doctor/find' className="nav-link" >
                    Find Clinic
                </Link>
            </li>
            <li className="nav-item">
                <Logout />
            </li>
        </>
    );
}
