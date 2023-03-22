import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../../UserContext/UserContext";
import axios from "axios";

export default function LoginPage() {
    const { getUserInformation } = useContext(UserContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();

        // make the AJAX request
        try {
            // make the AJAX request
            const response = await axios.post("/login", values);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            const user = await getUserInformation();
            // these url have to be changed according to the role
            // DONT FORGET!!!!!
            switch (user.role) {
                case "admin":
                    navigate("/");
                    break;
                case "patient":
                    navigate("/");
                    break;
                case "doctor":
                    navigate("/");
                    break;
                default:
                    navigate("/");
                    break;
            }
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

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <form action="/login" method="post" onSubmit={handleSubmit}>
            Email:
            <br />
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <br />
            <br />
            Password:
            <br />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <br />
            <br />
            <button>Login</button>
        </form>
    );
}
