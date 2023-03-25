import axios from "axios";
import { useState } from "react";

export default function PatientList({ patientList }) {

    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleClick = (e, userId) => {
        e.preventDefault();
        patientDetail(e, userId);
    }

    const patientDetail = async (e, userId) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/doctors/patient-detail/${userId}`)
            setSelectedPatient(response.data);
        } catch (error) {
            console.log(error)
        }
    }
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
                                    <button className="btn btn-info" onClick={(e) => handleClick(e, result.user.id)}>Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedPatient && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{selectedPatient.first_name} {selectedPatient.surname}</h2>
                        <p><strong>Email:</strong> {selectedPatient.email}</p>
                        <p><strong>Date of birth:</strong> {selectedPatient.date_of_birth}</p>
                        {/* <p><strong>Insurance Number:</strong> {selectedPatient.patient.insurance_number}</p> */}
                        <p><strong>Phone number:</strong> {selectedPatient.phone_number}</p>
                        <button className="btn btn-danger" onClick={handleCloseClick}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}