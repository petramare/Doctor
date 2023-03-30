import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Components/UserContext/UserContext";
import axios from "axios";

export default function Logout() {
    const { user, setUser, getUserInformation } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            // make the AJAX request
            const response = await axios.post("/logout");
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            getUserInformation();
            navigate("/");
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };

    const userColor = () => {
        if (user) {
            switch (user.role) {
                case "doctor":
                    return "light";
                case "patient":
                    return "dark";
                case "manager":
                    return "infor";
                default:
                    return "light";
            }
        }
    };

    return user ? (
        <div className="d-flex">
            <div className={`btn btn-${userColor()} disabled mx-2`}>
                {user.role.toUpperCase()}: {user.first_name} {user.surname}
            </div>
            <button
                className="btn btn-secondary"
                id="logout_btn"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    ) : (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}
