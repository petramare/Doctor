import { Link } from "react-router-dom";
import Logout from "../../Logout/Logout";

export default function Patientnavbar() {
    return (
        <>
            <nav className="navbar-nav nav-justified nav-pills flex-row">
                
                    <li className="nav-item active">
                        <Link to="/patient" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/patient/edit" className="nav-link">
                            Edit info
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/patient/find" className="nav-link">
                            Find Doctor
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="patient/condition" className="nav-link">
                            Health condition
                        </Link>
                    </li>
        
                      <li className="nav-item">
                        <Link to="/patient/messages" className="nav-link">
                            Messages
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Logout />
                    </li>
            </nav>
    
        </>
    );
}
