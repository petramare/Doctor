import axios from "axios";
import { useEffect, useState } from "react"

export default function FindClinic() {
    
    
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');

    // const handleSearch = async () => {
    //     try {
    //         let response = await axios.get(`/doctor/${user_id}findClinics/find?search=${query}`)
    //         setSearch(response.data);
    //         console.log(response.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <>
            <h1>Find your Doctor:</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault();

                handleSearch();
            }}>
                <label htmlFor="search">Search for a clinic by Name:</label><br></br>
                <input type="text" name="search" id="search" onChange={(e) => { setQuery(e.target.value) }} />
                <button>Submit</button>
            </form>
            {
                search ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name:</th>
                                <th scope="col">Address:</th>
                                <th scope="col">Registration code:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {search.map((result, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.clinic.name} {result.clinic.address}</td>
                                    <td>{result.clinic.registration_code}</td>
                                    <td><button>More information</button></td>
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