import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../../UserContext/UserContext";

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
        const response = await fetch("/login", {
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
            const user = await getUserInformation();
            console.log("IN LOGIN", user);
            navigate("/");
        }

        // with axios
        // try {
        //     // make the AJAX request
        //     const response = await axios.post("/login", values);
        //     // get the (already JSON-parsed) response data
        //     const response_data = response.data;
        //     navigate("/");
        // } catch (error) {
        //     // // if the response code is not 2xx (success)
        //     // switch (error.response.status) {
        //     //     case 422:
        //     //         // handle validation errors here
        //     //         console.log(
        //     //             "VALIDATION FAILED:",
        //     //             error.response.data.errors
        //     //         );
        //     //         break;
        //     //     case 500:
        //     //         console.log("UNKNOWN ERROR", error.response.data);
        //     //         break;
        //     // }
        // }

        // re-fetch the user information
        // (method passed down via UserContext from App)
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
