import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext/UserContext";

export default function Homenavbar() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <li className="nav-item active">
                <Link
                    to={`/managers/edit`}
                    className="nav-link"
                >
                    Edit Details
                </Link>
            </li>
            <li className="nav-item active">
                <Link
                    to={`/managers/find`}
                    className="nav-link"
                >
                    Find Doctor
                </Link>
            </li>
        </>
    );
}
