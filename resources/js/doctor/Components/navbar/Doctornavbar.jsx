import Logout from "../../Logout/Logout";

export default function Doctornavbar() {
    return (
        <>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    Home
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    Patient Records
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    Edit info
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Find Clinic
                </a>
            </li>
            <li className="nav-item">
                <Logout />
            </li>
        </>
    );
}
