import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdditionalRegistration() {
    const [insuranceCompanies, setInsuranceCompanies] = useState(null);
    const [patient, setPatient] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const loadInsuranceCompanies = async () => {
        try {
            let response = await axios.get("/api/insuranceCompany");
            setInsuranceCompanies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadInsuranceCompanies();
    }, []);

    const handleChange = (e) => {
        setPatient((previous_values) => {
            return {
                ...previous_values,
                patient: {
                    ...previous_values.patient,
                    [e.target.name]: e.target.value,
                },
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("/api/patient/insert", patient);
            navigate("/patient/edit");
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.errors);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1>Enter Your Details</h1>
                        <div className="form-group">
                            <label htmlFor="insurance_number">
                                Insurance Number:
                            </label>
                            <input
                                type="text"
                                name="insurance_number"
                                className="form-control"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <label htmlFor="insurance_company_id">
                            Insurance Company
                        </label>
                        <select
                            name="insurance_company_id"
                            className="form-control"
                            aria-label="Floating label select example"
                            onChange={handleChange}
                            required
                        >
                            <option value={null} disabled selected>
                                -- Select Insurance Company --
                            </option>
                            {insuranceCompanies
                                ? insuranceCompanies.map((company, i) => {
                                    return (
                                        <option value={company.id} key={i}>
                                            {company.name}
                                        </option>
                                    );
                                })
                                : "load"}
                        </select>
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
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
