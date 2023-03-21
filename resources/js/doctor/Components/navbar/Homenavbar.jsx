import { Link } from "react-router-dom";


export default function Homenavbar() {


    return (
        <>
            <li className="nav-item active">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link >
            </li>
        </>
    )
}