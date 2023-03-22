import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

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
