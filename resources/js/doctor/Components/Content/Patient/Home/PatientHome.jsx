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
                <div className="container">
                    {console.log(doctorsAppointments)}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="greetings text-center" >
                                    <h1 className=" ">
                                        Welcome back, {user.first_name}{" "}
                                        {user.surname}
                                    </h1>
                                
                                    <h3 className="text-center">
                                        Here are your doctors schedule for this
                                        month
                                    </h3>
                                </div >
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    {doctorsAppointments.map((doctorAppointment, index) => {
                        return (
                            <div key={index} className="container">
                               <div className="schedule_doctor-photo__man">
                                    
                                    <div className="col schedule_of-calendar">
                                       
                                         
                                         <div className="calendar">
                                                <PatientCalendarComponent
                                                    doctorAppointment={
                                                        doctorAppointment
                                                    }
                                                />
                                        </div>
                   
                                    </div>
    
                                    < div className="col doctor_picker_bubble--man" >
                                         <h1 className="schedule_of-heading">
                                            <p class="bubble speech">
 
                                                Here you see the schedule of Dr.{" "}
                                                {doctorAppointment.user.first_name}{" "}
                                                {doctorAppointment.user.surname}. 
                                            </p>
                                        </h1> 
                                        <img className="animated_doctor" src={doctor7} />
                                    </div>

                                </div>

                                <div className="schedule_doctor-photo__woman">
                                        <PatientDatepicker
                                            doctor_id={
                                                doctorAppointment.doctor_id
                                            }
                                            refresh={refresh}
                                            setRefresh={setRefresh}
                                            />
                                    <div className="doctor_picker_bubble--woman">
                                        <h1 >
                                            <p class="bubble speech">
                                                Set an appointment.
                                            </p>
                                        </h1> 
                                        <img className="animated_doctor-woman" src={doctor6} />
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
