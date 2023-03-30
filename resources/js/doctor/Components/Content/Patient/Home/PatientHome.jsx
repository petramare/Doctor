import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext/UserContext";
import PatientCalendarComponent from "../../Calendar/PatientCalendar";
import PatientDatepicker from "../../Calendar/PatientDatepicker";
import ColorLegendPatient from "../../Doctor/ColorLegend/ColorLegendPatient";

export default function PatientHome() {
    const { user } = useContext(UserContext);
    const [doctorsAppointments, setDoctorsAppointments] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const loadDoctors = async () => {
        try {
            const response = await axios.get(`/api/appointments/doctors`);
            setDoctorsAppointments(response.data.accepted_doctor);
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
                    
                    {/* {console.log(doctorsAppointments)} */}
                    <iframe width="560" height="315" className="mt-5" src="https://embed.lottiefiles.com/animation/100854"></iframe>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center ms-5">
                                <h1>
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>
                                
                                <h3>
                                    Here are your doctors schedules for this
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
                                            visiting_hours={
                                                doctorAppointment.visiting_hours
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="calendar">
                                            {/* {console.log(doctorAppointment)} */}
                                            <PatientCalendarComponent
                                                doctorAppointment={
                                                    doctorAppointment
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                < ColorLegendPatient />
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
