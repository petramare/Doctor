import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext/UserContext";

export default function Homenavbar() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <li className="nav-item active">
                <Link
                    to={`/manager/${user ? user.id : ""}/edit`}
                    className="nav-link"
                >
                    Edit Details
                </Link>
            </li>
        </>
    );
}
