import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext/UserContext";

export default function EditInfo() {
    const { user } = useContext(UserContext);
    const [managerDetail, setManagerDetail] = useState(null);

    const loadManager = async () => {
        try {
            let response = await axios.get(`/api/managers/${user.id}`);
            setManagerDetail(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadManager();
    }, [user]);

    const handleChangeUser = (e) => {
        setManagerDetail((previous_values) => {
            return {
                ...previous_values,
                user: {
                    ...previous_values.user,
                    [e.target.name]: e.target.value,
                },
            };
        });
    };

    const handleChangeClinic = (e) => {
        setManagerDetail((previous_values) => {
            return {
                ...previous_values,
                clinic: {
                    ...previous_values.clinic,
                    [e.target.name]: e.target.value,
                },
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submited");
        console.log(managerDetail);

        try {
            let response = await axios.post(
                "/api/managers/update",
                managerDetail
            );
        } catch (error) {
            console.log(error);
        }
    };

    return managerDetail ? (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1>User Info</h1>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                value={managerDetail.user.first_name}
                                onChange={handleChangeUser}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                name="surname"
                                className="form-control"
                                value={managerDetail.user.surname}
                                onChange={handleChangeUser}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="string"
                                name="email"
                                className="form-control"
                                value={managerDetail.user.email}
                                // onChange={handleChangeUser}
                                readOnly
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date_of_birth">
                                Date of Birth:
                            </label>
                            <input
                                type="text"
                                name="date_of_birth"
                                className="form-control"
                                value={managerDetail.user.date_of_birth}
                                onChange={handleChangeUser}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role:</label>
                            <input
                                type="text"
                                name="role"
                                className="form-control"
                                value={managerDetail.user.role}
                                // onChange={handleChangeUser}
                                readOnly
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_number">Id Number:</label>
                            <input
                                type="text"
                                name="id_number"
                                className="form-control"
                                value={managerDetail.user.id_number}
                                onChange={handleChangeUser}
                            />
                        </div>
                        <h1>Clinic Info</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={managerDetail.clinic.name}
                                onChange={handleChangeClinic}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                value={managerDetail.clinic.address}
                                onChange={handleChangeClinic}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registration_code">
                                Registration Code:
                            </label>
                            <input
                                type="text"
                                name="registration_code"
                                className="form-control"
                                value={managerDetail.clinic.registration_code}
                                onChange={handleChangeClinic}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tax_registration_code">
                                Tax Registration Code:
                            </label>
                            <input
                                type="text"
                                name="tax_registration_code"
                                className="form-control"
                                value={
                                    managerDetail.clinic.tax_registration_code
                                }
                                onChange={handleChangeClinic}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        "loading"
    );
}
