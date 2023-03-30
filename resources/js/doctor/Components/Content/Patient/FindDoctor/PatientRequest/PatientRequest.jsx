import axios from "axios";
import { useEffect, useState } from "react";


export default function PatientRequest({ request, setRequest, applied }) {

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
    }, [applied]);


    return (
        <>
            {
                request ?
                    <div>
                        <h1 className="text-center mt-5 mb-5" style={{ color: '#112D4E' }}>Your Doctors:</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle" scope="col">#</th>
                                    <th className="text-center align-middle" scope="col">Name:</th>
                                    <th className="text-center align-middle" scope="col">Specialization:</th>
                                    <th className="text-center align-middle" scope="col">Status:</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {request.map((result, index) => (
                                    <tr key={index}>
                                        <th className="text-center align-middle" scope="row">{index + 1}</th>
                                        <td className="text-center align-middle">{result.user.first_name} {result.user.surname}</td>
                                        <td className="text-center align-middle">{result.specialization}</td>
                                        <td className="text-center align-middle">{result.pivot.status}</td>
                                        <td>
                                            <button className="detail-button" type="button" data-toggle="modal" data-target={`#patientDetail${index}`}>Detail</button>
                                            {/* <!-- Modal Detail --> */}
                                            <div className="modal fade" id={`patientDetail${index}`} tabIndex="-1" role="dialog" aria-labelledby={`patientDetailLabel${index}`} aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id={`patientDetail${index}`}>Doctor name: {result.user.first_name} {result.user.surname} </h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="popup">
                                                                <div className="popup-content">
                                                                    <h2 className="text-center">{result.user.first_name} {result.user.surname}</h2>
                                                                    <p className="text-center"><strong>Email:</strong> {result.user.email}</p>
                                                                    <p className="text-center"><strong>Specialization:</strong> {result.specialization}</p>
                                                                    <p className="text-center"><strong>Working days:</strong></p>
                                                                    <div className="col text-center">
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
                    </div>
                    :
                    ''
            }
        </>
    )
}