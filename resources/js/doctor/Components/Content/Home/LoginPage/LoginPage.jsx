import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../../UserContext/UserContext";
import axios from "axios";
import './LoginPage.scss';

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
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mt-5" style={{ color: '#112D4E' }}>Login</h1>
                    </div>
                </div>
            </div>

            <div className="registration-form">

                <form action="/login" method="post" onSubmit={handleSubmit}>

                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control item"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control item"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button className="create-account">Login</button>
                    </div>
                </form>
            </div>

        </>



    );
}