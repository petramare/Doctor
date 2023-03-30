import axios from "axios";
import { useEffect } from "react";
import './PatientRequest.scss';

export default function PatientRequest({ request, setState, state }) {
    //Accept button
    const handleClickAccept = (e, patient) => {
        e.preventDefault();
        sendAccept(e, patient);
    }
    //Delete button
    const handleClickDelete = (e, patient) => {
        e.preventDefault();
        sendReject(e, patient);
    }

    // change status to accepted
    const sendAccept = async (e, patient) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/doctors/accept', {
                patient: patient.pivot.patient_id,
                status: 'accepted'
            })
            setState(state + 1);
        } catch (error) {
            console.log(error);
        }
    }
    // change status to rejected
    const sendReject = async (e, patient) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/doctor/reject', {
                patient: patient.pivot.patient_id,
                status: 'rejected'
            })
            setState(state + 1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {
                request.length > 0 ?
                    <div className="card p-2">
                        <h2 className="text-center">New Registration requests:</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center" scope="col">#</th>
                                        <th className="text-center" scope="col">Name:</th>
                                        <th className="text-center" scope="col">Status:</th>
                                        <th className="text-center" scope="col">Action:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {request.map((result, index) => (
                                        <tr key={index}>
                                            <th className="text-center align-middle" scope="row">{index + 1}</th>
                                            <td className="text-center align-middle">{result.user.first_name} {result.user.surname}</td>
                                            <td className="text-capitalize text-center align-middle">{result.pivot.status}</td>
                                            <td className="text-center align-middle">
                                                <button type="button" className="accept-button" onClick={(e) => handleClickAccept(e, result)}>Accept</button>
                                                <button className="reject-button" onClick={(e) => handleClickDelete(e, result)}>Reject</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    ''
            }
        </>
    )
}