import axios from "axios";
import { useEffect, useState } from "react";

export default function AdditionalRegistration() {
    const [insuranceCompanies, setInsuranceCompanies] = useState(null);

    const loadInsuranceCompanies = async () => {
        try {
            let response = await axios.get("/api/insuranceCompany");
            setInsuranceCompanies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // const getInsuranceCompany = () => {
    //     insuranceCompanies
    //         ? insuranceCompanies.map((company, i) => {
    //               return (
    //                   <option key={i}>
    //                       {company.name}
    //                   </option>
    //               );
    //           })
    //         : "load";
    // };

    //   {insuranceCompanies
    //     ? insuranceCompanies.map((company, i) => {
    //           return (
    //               <option value={company.id} key={i}>
    //                   {company.name}
    //               </option>
    //           );
    //       })
    //     : "load"}

    useEffect(() => {
        loadInsuranceCompanies();
    }, []);

    const handleChange = (e) => {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("patient reg clicked");
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
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="insurance_company_id">
                                Insurance Company:
                            </label>
                            <input
                                type="text"
                                name="insurance_company_id"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <select
                            className="form-control"
                            aria-label="Floating label select example"
                            onChange={handleChange}
                        >
                            <option value="choose" disabled selected="selected">
                                -- Select Insurance Company --
                            </option>
                            {getInsuranceCompany}
                        </select>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
