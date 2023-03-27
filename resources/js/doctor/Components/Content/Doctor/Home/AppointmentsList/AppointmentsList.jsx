import axios from "axios";
import { useEffect, useState } from "react";

export default function AppointmentsList() {

    const [appList, setAppList] = useState([]);
    // List of Appointments which are Suggested
    const handleAppList = async () => {
        // e.preventDefault();
        try {
            const response = await axios.get('/api/appointments/doctor/list')
            setAppList(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleAppList();
    }, [])

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
                            {appList.map((result, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.patient.first_name} {result.patient.surname}</td>
                                    <td>{result.start}</td>
                                    <td>{result.end}</td>
                                    <td>{result.description}</td>
                                    <td>{result.appointment_status.description}</td>
                                    <td>
                                        <button className="btn btn-success" type="button" data-toggle="modal" data-target={`#accept${index}`}>Accept</button>
                                        <button className="btn btn-danger" type="button" data-toggle="modal" data-target={`#detail${index}`}>Reject</button>
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