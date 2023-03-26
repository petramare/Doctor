import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../../UserContext/UserContext";

export default function EditInfo() {
    const { user } = useContext(UserContext);
    const [patient, setPatient] = useState(null);

    const loadData = async () => {
        try {
            let response = await axios.get(`/api/patient/show/${user.id}`);
            setPatient(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            loadData();
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/patient/update", patient);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            },
        }));
    };

    const handlePatient = (e) => {
        setPatient((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
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

            {patient ? (
                <div className="container">
                    <div className="row">
                        <div className="col">
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
                                        id="first_name"
                                        value={patient.user.first_name || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="surname"
                                        name="surname"
                                        value={patient.user.surname || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={patient.user.email || ""}
                                        // onChange={handleChange}
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="date_of_birth"
                                        name="date_of_birth"
                                        value={patient.user.date_of_birth || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role:</label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="form-control"
                                        value={patient.user.role || ""}
                                        // onChange={handleChange}
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dob">ID number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="id_number"
                                        name="id_number"
                                        value={patient.user.id_number || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="insurance_number">
                                        Insurance Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="insurance_number"
                                        name="insurance_number"
                                        value={patient.insurance_number || ""}
                                        onChange={handlePatient}
                                    />
                                </div>
                                <button type="submit" className="btn btn-dark">
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
