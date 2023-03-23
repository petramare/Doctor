import { useState } from "react"

export default function PatientRequest() {

    const [status, setStatus] = useState('');
    const [request, setRequest] = useState(null);




    return (
        <>
            {
                request ?
                    <div>
                        <h1>Your request status:</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Request:</th>
                                    <th scope="col">Name:</th>
                                    <th scope="col">Status:</th>
                                    <th scope="col">Action:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Name</td>
                                    <td>Applied</td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    ''
            }
        </>
    )
}