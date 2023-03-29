import axios from "axios";
import { useEffect, useState } from "react";

export default function AppointmentsList({ appList, setAppList }) {


    const [render, setRender] = useState(0);
    // List of Appointments which are Suggested
    const handleAppList = async () => {
        try {
            const response = await axios.get('/api/appointments/doctor/list')
            setAppList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDoctorAppClickAccept = async (e, appointmentRequest) => {
        // On click change status of Appointment from Suggested(1) to Approved(3)
        try {
            const response = await axios.post('/api/appointments/doctor/status/approved', {
                appId: appointmentRequest.id,
                value: 3
            })
            setRender(render + 1);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDoctorAppClickRejected = async (e, appointmentRequest) => {
        // On click change status of Appointment from Suggested(1) to Approved(3)
        try {
            const response = await axios.post('/api/appointments/doctor/status/rejected', {
                appId: appointmentRequest.id,
                value: 2
            })
            setRender(render + 1);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleAppList();
    }, [render])

    return (

        <>
            {appList ?
                <div>
                    <h1>List of requested appointment:</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Appointment:</th>
                                <th scope="col">Patient Name:</th>
                                <th scope="col">Start:</th>
                                <th scope="col">End:</th>
                                <th scope="col">Description:</th>
                                <th scope="col">Status:</th>
                                <th scope="col">Action:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(appList)}
                            {appList.map((result, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.patient.first_name} {result.patient.surname}</td>
                                    <td>{result.start}</td>
                                    <td>{result.end}</td>
                                    <td>{result.description}</td>
                                    <td>{result.appointment_status.description}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            type="button"
                                            data-toggle="modal"
                                            data-target={`#doctorAppAccept${index}`}
                                            onClick={(e) => handleDoctorAppClickAccept(e, result)}>
                                            Accept
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            type="button" data-toggle="modal"
                                            data-target={`#doctorAppDetail${index}`}
                                            onClick={(e) => handleDoctorAppClickRejected(e, result)}>
                                            Reject
                                        </button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                :
                <div>NO APPOINTMENTS</div>
            }
        </>
    )
}