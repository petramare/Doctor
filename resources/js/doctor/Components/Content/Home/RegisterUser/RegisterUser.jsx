import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import './RegisterUser.scss';

export default function RegisterUser() {
    const { getUserInformation } = useContext(UserContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        first_name: "",
        surname: "",
        email: "",
        date_of_birth: "",
        id_number: "",
        role: "",
        password: "",
        password_confirmation: "",
    });
    const [errorMessages, setErrorMessages] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //make the AJAX request
            const response = await axios.post("/register", values);
            // get the (already JSON - parsed) response data
            const response_data = response.data;
            const user = await getUserInformation();
            // these url have to be changed according to the role
            // DONT FORGET!!!!!
            switch (user.role) {
                case "manager":
                    navigate("/managers/additional-registration");
                    break;
                case "patient":
                    navigate("/patient/additional-registration");
                    break;
                case "doctor":
                    navigate("/doctor/additional-registration");
                    break;
                default:
                    navigate("/");
                    break;
            }
        } catch (error) {
            // if the response code is not 2xx (success)
            setErrorMessages(error.response.data.errors);
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
            //values before update
            return {
                ...previous_values, //values to be updated
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mt-5" style={{ color: '#112D4E' }}>Register</h1>
                    </div>
                </div>
            </div>

            <div className="registration-form">
                <form action="/register" method="post" onSubmit={handleSubmit}>
                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="first_name"
                            placeholder="First name"
                            value={values.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="surname"
                            placeholder="Surname"
                            value={values.surname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control item"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="string"
                            className="form-control item"
                            name="date_of_birth"
                            placeholder="Date of birth"
                            value={values.date_of_birth}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control item"
                            name="id_number"
                            placeholder="Id number"
                            value={values.id_number}
                            onChange={handleChange}
                        />
                    </div>

                    <select className="form-control item" name="role" id="role" onChange={handleChange}>
                        <option value="select_role">Select your role</option>
                        <option value="doctor">doctor</option>
                        <option value="patient">patient</option>
                        <option value="manager">manager</option>
                    </select>


                    <input
                        type="password"
                        name="password"
                        className="form-control item"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password_confirmation"
                        className="form-control item"
                        placeholder="Confirm password"
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />
                    {errorMessages
                        ? Object.values(errorMessages).map((message, i) => {
                            return (
                                <div
                                    key={i}
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {message}
                                </div>
                            );
                        })
                        : ""}
                    <div className="form-group"><button className="create-account">Register</button></div>
                </form>
            </div>
        </>
    );
}
