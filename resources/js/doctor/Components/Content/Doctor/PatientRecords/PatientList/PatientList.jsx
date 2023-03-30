
import axios from "axios";
import "./PatientList.scss";

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
                <table className="table table-striped table-hover table-bordered">

                    <thead>
                        <tr>
                            <th className="text-center" scope="col">#</th>
                            <th className="text-center" scope="col">Name:</th>
                            <th className="text-center" scope="col">Email:</th>
                            <th className="text-center" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList.map((result, index) => (
                            <tr key={index}>
                                <th className="text-center align-middle" scope="row">{index + 1}</th>
                                <td className="text-center align-middle">{result.user.first_name} {result.user.surname}</td>
                                <td className="text-center align-middle" >{result.user.email}</td>
                                <td className="text-center align-middle" >

                                    <button className="accept-button" type="button" data-toggle="modal" data-target={`#detail${index}`}>Detail</button>
                                    <button className="reject-button margin-button-left" type="button" data-toggle="modal" data-target={`#delete${index}`}>Remove</button>
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
                                                            <p>Are you sure you want to remove {result.user.first_name} {result.user.surname} from your patients list ? </p>
                                                            <button type="button" className="close btn accept-button" data-dismiss="modal" aria-label="Close" onClick={(e) => handleDelete(e, result)}>Yes</button>
                                                            <button type="button" className="close btn reject-button" data-dismiss="modal" aria-label="Close">No</button>
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