
import axios from "axios";
import { useEffect } from "react";

export default function PatientList({ patientList, setState, state }) {

    const handleDelete = async (e, patient) => {
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
            <div>
                <h1 className="text-center">Your patients:</h1>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">Result:</th>
                            <th scope="col">Name:</th>
                            <th scope="col">Email:</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList.map((result, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{result.user.first_name} {result.user.surname}</td>
                                <td>{result.user.email}</td>
                                <td>

                                    <button className="btn btn-info" type="button" data-toggle="modal" data-target={`#detail${index}`}>Detail</button>
                                    <button className="btn btn-danger" type="button" data-toggle="modal" data-target={`#delete${index}`}>Delete</button>
                                    {/* <!-- Modal Detail --> */}
                                    <div className="modal fade" id={`detail${index}`} tabIndex="-1" role="dialog" aria-labelledby={`detailLabel${index}`} aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id={`detail${index}`}>Patient name: {result.user.first_name} {result.user.surname} </h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="popup">
                                                        <div className="popup-content">
                                                            <h2>{result.user.first_name} {result.user.surname}</h2>
                                                            <p><strong>Email:</strong> {result.user.email}</p>
                                                            <p><strong>Date of birth:</strong> {result.user.date_of_birth}</p>
                                                            <p><strong>Insurance Number:</strong> {result.insurance_number}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Modal Detail --> */}
                                    <div className="modal fade" id={`delete${index}`} tabIndex="-1" role="dialog" aria-labelledby={`deleteLabel${index}`} aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id={`delete${index}`}>Patient name: {result.user.first_name} {result.user.surname} </h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="popup">
                                                        <div className="popup-content">
                                                            <p>Are you sure you want to delete the user {result.user.first_name} {result.user.surname} ? </p>
                                                            <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close" onClick={(e) => handleDelete(e, result)}>Yes</button>
                                                            <button type="button" className="close btn btn-danger" data-dismiss="modal" aria-label="Close">No</button>
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

        </>
    )
}