import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditInfo() {
    let { managerId } = useParams();
    console.log(managerId);
    const [managerDetail, setManagerDetail] = useState(null);

    const loadManager = async () => {
        try {
            let response = await axios.get(`/api/managers/1`);
            setManagerDetail(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadManager();
    }, []);

    const handleChange = (e) => {
        setManagerDetail((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };

    return managerDetail ? (
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <form action="">
                        <h1>User Info</h1>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <label htmlFor="first_name">First Name:</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={managerDetail.user.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <label htmlFor="surname">Surname:</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={managerDetail.user.surname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="string"
                                    name="email"
                                    value={managerDetail.user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                {" "}
                                <label htmlFor="date_of_birth">
                                    Date of Birth:
                                </label>
                                <input
                                    type="text"
                                    name="date_of_birth"
                                    value={managerDetail.user.date_of_birth}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                {" "}
                                <label htmlFor="role">Role:</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={managerDetail.user.role}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="">
                            <h1>Clinic Info</h1>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    {" "}
                                    <label htmlFor="name">Role:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={managerDetail.clinic.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    {" "}
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={managerDetail.clinic.address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    {" "}
                                    <label htmlFor="registration_code">
                                        Registration Code:
                                    </label>
                                    <input
                                        type="text"
                                        name="registration_code"
                                        value={
                                            managerDetail.clinic
                                                .registration_code
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    {" "}
                                    <label htmlFor="tax_registration_code">
                                        Tax Registration Code:
                                    </label>
                                    <input
                                        type="text"
                                        name="tax_registration_code"
                                        value={
                                            managerDetail.clinic
                                                .tax_registration_code
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        "loading"
    );
}
