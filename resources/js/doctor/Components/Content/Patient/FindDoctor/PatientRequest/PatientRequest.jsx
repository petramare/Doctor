import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../../UserContext/UserContext";


export default function PatientRequest({ status }) {

    const [request, setRequest] = useState(null);
    const { user } = useContext(UserContext);

    const handleRequest = async () => {
        try {
            const response = await axios.get('/api/patient/request/status')
            setRequest(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        handleRequest();
    }, []);


    return (
        <>
            {
                request ?
                    <div>
                        <h1>Your Doctors:</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Request:</th>
                                    <th scope="col">Name:</th>
                                    <th scope="col">Specialization:</th>
                                    <th scope="col">Status:</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {request.map((result, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{result.user.first_name} {result.user.surname}</td>
                                        <td>{result.specialization}</td>
                                        <td>{result.pivot.status}</td>
                                        <td>
                                            <button className="btn btn-info">Detail</button>
                                        </td>
                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    </div>
                    :
                    ''
            }
        </>
    )
}