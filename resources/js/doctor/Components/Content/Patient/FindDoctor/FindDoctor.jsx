import axios from "axios";
import { useEffect, useState } from "react";
import PatientApply from "./PatientApply/PatientApply";
import PatientRequest from './PatientRequest/PatientRequest';

export default function FindDoctor() {

    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');
    const [request, setRequest] = useState(null);
    const [applied, setApplied] = useState(null);

    const handleSearch = async () => {
        try {
            let response = await axios.get(`/api/patient/find?search=${query}`)
            setSearch(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [applied]);
    return (
        <>
            <PatientRequest request={request} setRequest={setRequest} applied={applied} />

            <h1 className="text-center mt-5" style={{ color: '#112D4E' }}>Find your Doctor:</h1>
            <form className="text-center w-100 mb-5" action="" onSubmit={(e) => {
                e.preventDefault();

                handleSearch();
            }}>
                <label htmlFor="search">Search for a doctor by Name:</label><br></br>
                <input className="search-item" type="text" name="search" id="search" onChange={(e) => { setQuery(e.target.value) }} />
                <button className="submit-button">Search</button>
            </form>
            {
                search.length > 0 ?
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center" scope="col">Result:</th>
                                <th className="text-center" scope="col">Name:</th>
                                <th className="text-center" scope="col">Specialization:</th>
                                <th className="text-center" scope="col">Action:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(search)}
                            {search.map((result, index) => (
                                <tr key={index}>
                                    <th className="text-center" scope="row">{index + 1}</th>
                                    <td className="text-center align-middle">{result.user.first_name} {result.user.surname}</td>
                                    <td className="text-center align-middle">{result.doctor_id ? result.specialization : ''}</td>
                                    <td className="align-middle text-center">
                                        <PatientApply
                                            result={result}
                                            setApplied={setApplied} />
                                        <button className="detail-button margin-button-left" type="button" data-toggle="modal" data-target={`#doctorDetail${index}`}>Detail</button>
                                        {/* <!-- Modal Detail --> */}
                                        <div className="modal fade" id={`doctorDetail${index}`} tabIndex="-1" role="dialog" aria-labelledby={`doctorDetailLabel${index}`} aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={`doctorDetail${index}`}>Doctor name: {result.user.first_name} {result.user.surname} </h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="popup">
                                                            <div className="popup-content">
                                                                <h2>{result.user.first_name} {result.user.surname}</h2>
                                                                <p><strong>Email:</strong> {result.user.email}</p>
                                                                <p><strong>Specialization:</strong> {result.specialization}</p>
                                                                <p><strong>Working days:</strong> {result.specialization}</p>
                                                                <div className="col">
                                                                    {Object.entries(JSON.parse(result.visiting_hours))
                                                                        .filter(([day, isOpen]) => isOpen)
                                                                        .map(([a], i) => (
                                                                            <button key={i} className="accept-button margin-button-left">{a}</button>
                                                                        ))}
                                                                </div >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    'loading'
            }

        </>
    )
}