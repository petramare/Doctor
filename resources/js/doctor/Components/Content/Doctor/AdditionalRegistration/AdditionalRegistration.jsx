import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdditionalRegistration() {
    const [doctor, setDoctor] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDoctor((previous_values) => {
            return {
                ...previous_values,
                doctor: {
                    ...previous_values.doctor,
                    [e.target.name]: e.target.value,
                },
            };
        });
    };

    const handleChangeBox = (e) => {
        setDoctor((previous_values) => {
            return {
                ...previous_values,
                visiting_hours: {
                    ...previous_values.visiting_hours,
                    [e.target.name]: e.target.checked,
                },
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("/api/doctor/insert", doctor);
            console.log(response.data);
            setErrorMessages([]);
            setSuccessMessage(response.status);
            navigate("/doctor/edit");
        } catch (error) {
            console.log(error);
            setSuccessMessage("");
            setErrorMessages(error.response.data.errors);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1>Enter Doctor Details</h1>
                        <div className="form-group">
                            <label htmlFor="specialization">
                                Specialization:
                            </label>
                            <input
                                type="text"
                                name="specialization"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="doctor_license_number">
                                Doctor License Number:
                            </label>
                            <input
                                type="text"
                                name="doctor_license_number"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="visiting_hours">
                                Visiting Hours:
                            </label>
                        </div>
                        <div className="form-group ">
                            <div className="form-check checkbox-xl">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="monday"
                                    onChange={handleChangeBox}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="monday"
                                >
                                    Monday
                                </label>
                            </div>
                            <div className="form-check checkbox-xl">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="tuesday"
                                    onChange={handleChangeBox}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="tuesday"
                                >
                                    Tuesday
                                </label>
                            </div>
                            <div className="form-check checkbox-xl">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="wednesday"
                                    onChange={handleChangeBox}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="wednesday"
                                >
                                    Wednesday
                                </label>
                            </div>
                            <div className="form-check checkbox-xl">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="thursday"
                                    onChange={handleChangeBox}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="thursday"
                                >
                                    Thursday
                                </label>
                            </div>
                            <div className="form-check checkbox-xl">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="friday"
                                    onChange={handleChangeBox}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="friday"
                                >
                                    Friday
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
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
                    </form>
                </div>
            </div>
        </div>
    );
}
