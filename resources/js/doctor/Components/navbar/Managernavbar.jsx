import { Link } from "react-router-dom";


export default function Homenavbar() {


    return (
        <>
            <li className="nav-item active">
                <Link to='/manager/:id/edit' className="nav-link">Edit Details</Link>
            </li>
        </>
    )
}