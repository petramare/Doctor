import axios from "axios";
import { useEffect, useState } from "react"
import './FindClinic.scss'

export default function FindClinic() {


    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            let response = await axios.get(`/api/doctors/find?search=${query}`)
            setSearch(response.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <>
            <h1>Find your clinic:</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault();

                handleSearch();
            }}>
                <label htmlFor="search">Search for a clinic by Name:
                </label>
                <br></br>
                <input className="search-item" type="text" name="search" id="search" onChange={(e) => { setQuery(e.target.value) }} />
                <button className="submit-button">Submit</button>
            </form>
            {
                search ?
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Address:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {search.map((result, index) => (
                                <tr key={index}>
                                    <th className="align-middle" scope="row">{index + 1}</th>
                                    <td className="align-middle">{result.name} {result.address}</td>
                                    <td className="align-middle text-center">
                                        <button className="accept-button">Apply</button>
                                        <button className="detail-button margin-button-left">Detail</button>
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