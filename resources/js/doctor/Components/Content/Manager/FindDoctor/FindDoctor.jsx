import axios from "axios";
import { useState } from "react";

export default function FindDoctor() {

    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/managers/find?search=${query}`)
            setSearch(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <h1>Find and edit:</h1>

            <form action="">
                <label htmlFor="search">Search for your doctor:</label><br></br>
                <input type="text" name="search" onChange={(e) => { setQuery(e.target.value) }} />
                <button onClick={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>Search</button>
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
                                    <td>{result.doctor.specialization}</td>
                                    <td>
                                        <button className="btn btn-outline-success">Edit</button>
                                        <button
                                            className="btn btn-outline-info">Detail</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    "loading"
            }

        </>
    )
}