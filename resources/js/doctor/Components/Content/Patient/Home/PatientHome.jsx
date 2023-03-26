import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext/UserContext";
import PatientCalendarComponent from "../../Calendar/PatientCalendar";
import PatientDatepicker from "../../Calendar/PatientDatepicker";

export default function PatientHome() {
    const { user } = useContext(UserContext);
    const [doctorsAppointments, setDoctorsAppointments] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const loadDoctors = async () => {
        try {
            const response = await axios.get(`api/appointments/doctors`);
            setDoctorsAppointments(response.data.doctors);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadDoctors();
    }, [refresh]);

    return (
        <>
            {user ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>
                                <h3>
                                    Here are your doctors schedule for this
                                    month:
                                </h3>
                            </div>
                        </div>
                    </div>
                    {doctorsAppointments.map((doctorAppointment, index) => {
                        return (
                            <div key={index} className="container">
                                <div className="row">
                                    <h1>
                                        Schedule of Dr.{" "}
                                        {doctorAppointment.user.first_name}{" "}
                                        {doctorAppointment.user.surname}
                                    </h1>
                                    <div className="col align-self-center">
                                        <PatientDatepicker
                                            doctor_id={
                                                doctorAppointment.doctor_id
                                            }
                                            refresh={refresh}
                                            setRefresh={setRefresh}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="calendar">
                                            <PatientCalendarComponent
                                                doctorAppointment={
                                                    doctorAppointment
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}
        </>
    );
}
