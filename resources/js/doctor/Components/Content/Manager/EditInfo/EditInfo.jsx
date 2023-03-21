import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditInfo() {
    let { id } = useParams();
    const [managerDetail, setManagerDetail] = useState(null);
    const [firstName, setFirstName] = useState({ first_name: "lukas" });

    const loadManager = async () => {
        try {
            let response = await axios.get(`/api/managers/${id}`);
            setManagerDetail(response.data);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submited");
        console.log(managerDetail);

        // try {
        //     let response = await axios.post('/api/missions/store', mission)
        //     setMessage(response.data['message'])
        // } catch (error) {
        //     console.log(error)
        // }
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                value={managerDetail.user.surname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="string"
                                name="email"
                                className="form-control"
                                value={managerDetail.user.email}
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role:</label>
                            <input
                                type="text"
                                name="role"
                                className="form-control"
                                value={managerDetail.user.role}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <h1>Clinic Info</h1>
                            <div className="form-group">
                                <label htmlFor="name">Role:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={managerDetail.clinic.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={managerDetail.clinic.address}
                                    onChange={handleChange}
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
                                    value={
                                        managerDetail.clinic.registration_code
                                    }
                                    onChange={handleChange}
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
                                        managerDetail.clinic
                                            .tax_registration_code
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        "loading"
    );
}
