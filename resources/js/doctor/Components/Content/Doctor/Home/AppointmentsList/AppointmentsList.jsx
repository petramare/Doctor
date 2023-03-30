import axios from "axios";
import { useEffect, useState } from "react";

export default function AppointmentsList({ appList, setAppList }) {
    const [render, setRender] = useState(0);
    // List of Appointments which are Suggested
    const handleAppList = async () => {
        try {
            const response = await axios.get("/api/appointments/doctor/list");
            setAppList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDoctorAppClickAccept = async (e, appointmentRequest) => {
        // On click change status of Appointment from Suggested(1) to Approved(3)
        try {
            const response = await axios.post(
                "/api/appointments/doctor/status/approved",
                {
                    appId: appointmentRequest.id,
                    value: 3,
                }
            );
            setRender(render + 1);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDoctorAppClickRejected = async (e, appointmentRequest) => {
        // On click change status of Appointment from Suggested(1) to Approved(3)
        try {
            const response = await axios.post(
                "/api/appointments/doctor/status/rejected",
                {
                    appId: appointmentRequest.id,
                    value: 2,
                }
            );
            setRender(render + 1);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleAppList();
    }, [render]);

    return (
        <>
            {appList.length !== 0 ? (
                <div>
                    <h3 className="text-center mb-3">List of requested appointment:</h3>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Appointment:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Patient Name:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Start:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    End:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Description:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Status:
                                </th>
                                <th
                                    className="text-center align-middle"
                                    scope="col"
                                >
                                    Action:
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {appList.map((result, index) => (
                                <tr key={index}>
                                    {/* {console.log(appList)} */}
                                    <th className="align-middle" scope="row">
                                        {index + 1}
                                    </th>
                                    <td className="align-middle">
                                        {result.patient.first_name}{" "}
                                        {result.patient.surname}
                                    </td>
                                    <td className="align-middle">
                                        {result.start}
                                    </td>
                                    <td className="align-middle">
                                        {result.end}
                                    </td>
                                    <td className="align-middle">
                                        {result.description}
                                    </td>
                                    <td className="align-middle">
                                        {result.appointment_status.description}
                                    </td>
                                    <td className="align-middle text-center">
                                        <button
                                            className="accept-button mb-1"
                                            type="button"
                                            data-toggle="modal"
                                            data-target={`#doctorAppAccept${index}`}
                                            onClick={(e) =>
                                                handleDoctorAppClickAccept(
                                                    e,
                                                    result
                                                )
                                            }
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="reject-button"
                                            type="button"
                                            data-toggle="modal"
                                            data-target={`#doctorAppDetail${index}`}
                                            onClick={(e) =>
                                                handleDoctorAppClickRejected(
                                                    e,
                                                    result
                                                )
                                            }
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
