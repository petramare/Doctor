import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../../UserContext/UserContext";

export default function AdditionalRegistration() {
    const { user } = useContext(UserContext);
    const [clinic, setClinic] = useState("");

    const handleChange = (e) => {
        setClinic((previous_values) => {
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
        console.log("clicked submit");

        setClinic((previous_values) => {
            return {
                ...previous_values,
                userId: user.id,
            };
        });

        console.log(clinic);

        try {
            let response = await axios.post("/api/manager/insert", clinic);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1>Enter Clinic Details</h1>
                        <div className="form-group">
                            <label htmlFor="name">Clinic Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
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
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
