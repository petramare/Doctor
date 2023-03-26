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
                            {search.map((result, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.first_name} {result.surname}</td>
                                    <td>{result.doctor ? result.doctor.specialization : ''}</td>
                                    <td>
                                        <PatientApply
                                            result={result}
                                            setApplied={setApplied} />
                                        <button className="btn btn-info">Detail</button>
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