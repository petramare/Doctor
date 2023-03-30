import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../../UserContext/UserContext";

export default function EditInfo() {
    const { user } = useContext(UserContext);
    const [doctor, setDoctor] = useState(null);
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const loadData = async () => {
        try {
            let response = await axios.get(`/api/doctors/show/${user.id}`);
            setDoctor(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            loadData();
        }
    }, [user]);

    const handleChangeUser = (e) => {
        setDoctor((previous_values) => {
            return {
                ...previous_values,
                user: {
                    ...previous_values.user,
                    [e.target.name]: e.target.value,
                },
            };
        });
    };

    const handleChangeDoctor = (e) => {
        setDoctor((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleChangeBox = (e) => {
        setDoctor((previous_values) => {
            let parsed = JSON.parse(previous_values.visiting_hours);
            let day = e.target.name;
            let visitingHours = e.target.checked;
            parsed[day] = visitingHours;
            let backToString = JSON.stringify(parsed);

            return {
                ...previous_values,
                visiting_hours: backToString,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/doctors/update", doctor);
            setErrorMessages([]);
            setSuccessMessage(response.status);
        } catch (error) {
            console.log(error);
            setSuccessMessage("");
            setErrorMessages(error.response.data.errors);
        }
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Edit your information</h1>
                    </div>
                </div>
            </div>

            {doctor ? (
                <div className="container">
                    <div className="row">
                        <div className="col registration-form">
                            <form
                                action=""
                                method="post"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <label htmlFor="first_name">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        value={doctor.user.first_name || ""}
                                        onChange={handleChangeUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="surname"
                                        value={doctor.user.surname || ""}
                                        onChange={handleChangeUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={doctor.user.email || ""}
                                        // onChange={handleChangeUser}
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_of_birth">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="date_of_birth"
                                        value={doctor.user.date_of_birth || ""}
                                        onChange={handleChangeUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role:</label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="form-control"
                                        value={doctor.user.role || ""}
                                        // onChange={handleChangeUser}
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_number">ID number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="id_number"
                                        value={doctor.user.id_number || ""}
                                        onChange={handleChangeUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="specialization">
                                        Specialization
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="specialization"
                                        value={doctor.specialization || ""}
                                        onChange={handleChangeDoctor}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="doctor_license_number">
                                        Doctor License Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="doctor_license_number"
                                        value={
                                            doctor.doctor_license_number || ""
                                        }
                                        onChange={handleChangeDoctor}
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
                                            checked={
                                                JSON.parse(
                                                    doctor.visiting_hours
                                                ).monday
                                                    ? true
                                                    : false
                                            }
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
                                            checked={
                                                JSON.parse(
                                                    doctor.visiting_hours
                                                ).tuesday
                                                    ? true
                                                    : false
                                            }
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
                                            checked={
                                                JSON.parse(
                                                    doctor.visiting_hours
                                                ).wednesday
                                                    ? true
                                                    : false
                                            }
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
                                            checked={
                                                JSON.parse(
                                                    doctor.visiting_hours
                                                ).thursday
                                                    ? true
                                                    : false
                                            }
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
                                            checked={
                                                JSON.parse(
                                                    doctor.visiting_hours
                                                ).friday
                                                    ? true
                                                    : false
                                            }
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
                                {errorMessages
                                    ? Object.values(errorMessages).map(
                                        (message, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="alert alert-danger"
                                                    role="alert"
                                                >
                                                    {message}
                                                </div>
                                            );
                                        }
                                    )
                                    : ""}
                                {successMessage == 200 ? (
                                    <div
                                        className="alert alert-success alert-dismissible fade show di"
                                        role="alert"
                                    >
                                        Record have been updated{" "}
                                        <button
                                            type="button"
                                            className="btn close"
                                            data-dismiss="alert"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                "loading"
            )}
        </>
    );
}
