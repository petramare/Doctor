import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // make the AJAX request
        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        // parse the response as JSON
        const response_data = await response.json();

        // if the response code is not 2xx (success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log("VALIDATION FAILED:", response_data.errors);
                    break;
                default:
                    console.log("UNKNOWN ERROR", response_data);
                    break;
            }
        } else {
            navigate("/");
        }
        // re-fetch the user information
        // (method passed down via UserContext from App)
        getUserInformation();
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
        <form action="/register" method="post" onSubmit={handleSubmit}>
            First name:
            <br />
            <input
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
            />
            <br />
            <br />
            SurName:
            <br />
            <input
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleChange}
            />
            <br />
            <br />
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
            Date of birth:
            <br />
            <input
                type="string"
                name="date_of_birth"
                value={values.date_of_birth}
                onChange={handleChange}
            />
            <br />
            <br />
            Id number:
            <br />
            <input
                type="number"
                name="id_number"
                value={values.id_number}
                onChange={handleChange}
            />
            <br />
            <br />
            Select your role:
            <br />
            <select name="role" id="role" onChange={handleChange}>
                <option value="select_role">Select role</option>
                <option value="doctor">doctor</option>
                <option value="patient">patient</option>
                <option value="manager">manager</option>
            </select>
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
            Confirm password:
            <br />
            <input
                type="password"
                name="password_confirmation"
                value={values.password_confirmation}
                onChange={handleChange}
            />
            <br />
            <br />
            <button>Register</button>
        </form>
    );
}