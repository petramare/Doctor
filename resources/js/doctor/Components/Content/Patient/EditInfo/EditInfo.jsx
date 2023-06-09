import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../../UserContext/UserContext";

export default function EditInfo() {
    const { user } = useContext(UserContext);
    const [patient, setPatient] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage(error.response.data.errors);
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
                        <h1 className="text-center mt-5" style={{ color: '#112D4E' }}>Edit your information</h1>
                    </div>
                </div>
            </div>

            {patient ? (
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
                                        className="form-control item"
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
                                        className="form-control item"
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
                                        className="form-control item"
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
                                        className="form-control item"
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
                                        className="form-control item"
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
                                        className="form-control item"
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
                                        className="form-control item"
                                        id="insurance_number"
                                        name="insurance_number"
                                        value={patient.insurance_number || ""}
                                        onChange={handlePatient}
                                    />
                                </div>
                                {errorMessage ? (
                                    Object.values(errorMessage).map((message, index) => {
                                        return (
                                            <div className="alert alert-danger" role="alert" key={index}>{message}</div>
                                        )
                                    })

                                )
                                    :
                                    ''
                                }
                                <button type="submit" className="submit-button">
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
