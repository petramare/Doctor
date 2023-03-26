import axios from "axios";
import { useEffect } from "react";

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
                request ?
                    <div>
                        <h1 className="text-center">Register requests:</h1>
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
                                {request.map((result, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{result.user.first_name} {result.user.surname}</td>
                                        <td className="text-capitalize">{result.pivot.status}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={(e) => handleClickAccept(e, result)}>Accept</button>
                                            <button className="btn btn-danger" onClick={(e) => handleClickDelete(e, result)}>Reject</button>
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