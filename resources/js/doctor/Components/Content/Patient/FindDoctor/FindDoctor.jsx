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
            <h1>Find your Doctor:</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault();

                handleSearch();
            }}>
                <label htmlFor="search">Search for a doctor by Name:</label><br></br>
                <input type="text" name="search" id="search" onChange={(e) => { setQuery(e.target.value) }} />
                <button>Submit</button>
            </form>
            {
                search ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Result:</th>
                                <th scope="col">Name:</th>
                                <th scope="col">Specialization:</th>
                                <th scope="col">Action:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(search)}
                            {search.map((result, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.user.first_name} {result.user.surname}</td>
                                    <td>{result.doctor_id ? result.specialization : ''}</td>
                                    <td>
                                        <PatientApply
                                            result={result}
                                            setApplied={setApplied} />
                                        <button className="btn btn-info" type="button" data-toggle="modal" data-target={`#doctorDetail${index}`}>Detail</button>
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
                                                                            <button key={i} className="btn btn-success m-2">{a}</button>
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