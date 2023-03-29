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
                                            <th className="text-center" scope="row">{index + 1}</th>
                                            <td className="text-center">{result.user.first_name} {result.user.surname}</td>
                                            <td className="text-capitalize text-center">{result.pivot.status}</td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-success btn-rounded" onClick={(e) => handleClickAccept(e, result)}>Accept</button>
                                                <button className="btn btn-danger btn-rounded" onClick={(e) => handleClickDelete(e, result)}>Reject</button>
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