import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext/UserContext";
import PatientCalendarComponent from "../../Calendar/PatientCalendar";
import PatientDatepicker from "../../Calendar/PatientDatepicker";
import './PatientHome.scss';
import doctor7 from "../../../../../../../public/img/doctor7.png";
import doctor6 from "../../../../../../../public/img/doctor6.png";

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
                    <div className="container">
                        <div className="row">
                            <div className="text-center">
                                <h1 >
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>                           
                                <h3>
                                    Here are your doctors schedule for this
                                    month
                                </h3>                            
                            </div>
                        </div>
                    </div>
       
                    {doctorsAppointments.map((doctorAppointment, index) => {
                        return (
                            <div key={index} className="container">
                               <div className="calendar_man">                                                                                               
                                         <div className="col calendar">
                                                <PatientCalendarComponent
                                                    doctorAppointment={
                                                        doctorAppointment
                                                    }
                                                />
                                        </div>                   
    
                                    < div className="col bubble_man" >
                                         <h1>
                                            <p class="bubble speech">
                                                Here you see the schedule of Dr.{" "}
                                                {doctorAppointment.user.first_name}{" "}
                                                {doctorAppointment.user.surname}. 
                                            </p>
                                        </h1> 
                                        <img className="man" src={doctor7} />
                                    </div>
                                </div>

                                <div className="picker_woman">
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
                                    <div className="bubble_woman">
                                        <h1 >
                                            <p class="bubble speech">
                                                Set an appointment.
                                            </p>
                                        </h1> 
                                        <img className="woman" src={doctor6} />
                                    </div >
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
