import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../../UserContext/UserContext";

export default function EditInfo() {

   const { user } = useContext(UserContext);
   const [doctor, setDoctor] = useState(null);

   const loadData = async () => {
    try {
        let response = await axios.get(`/api/patient/${user.id}`);
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
            const response = await axios.post("/api/doctor/update", doctor);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeDoctor = (e) => {
        const { name, value } = e.target;
        setDoctor((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            },
        }));
    };

    const handleDoctor = (e) => {
        setDoctor((previous_values) => {
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
                                    value={doctor.user.first_name || ""}
                                    onChange={handleChangeDoctor}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Surname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="surname"
                                    name="surname"
                                    value={doctor.user.surname || ""}
                                    onChange={handleChangeDoctor}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={doctor.user.email || ""}
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
                                    value={doctor.user.date_of_birth || ""}
                                    onChange={handleChangeDoctor}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role:</label>
                                <input
                                    type="text"
                                    name="role"
                                    className="form-control"
                                    value={doctor.user.role || ""}
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
                                    value={doctor.user.id_number || ""}
                                    onChange={handleChangeDoctor}
                                />

                        </div>
                        <div className="form-group">
                                <label htmlFor="dob">Specialization</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="specialization"
                                    name="specialization"
                                    value={doctor.user.specialization || ""}
                                    onChange={handleChangeDoctor}
                                />

                        </div>
                        

                        <div className="form-group">
                                <label htmlFor="dob">Doctor License Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="doctor_license_number"
                                    name="doctor_license_number"
                                    value={doctor.user.doctor_license_number || ""}
                                    onChange={handleChangeDoctor}
                                />

                        </div>
                            <div className="form-group">
                                <label htmlFor="visiting_hours">
                                    Visiting hours
                                    </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="visiting_hours"
                                    name="visiting_hours"
                                    // value={user.email}
                                    onChange={handleChangeDoctor}
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
