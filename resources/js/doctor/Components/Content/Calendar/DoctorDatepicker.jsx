import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";

export default function DoctorDatepicker({ refresh, setRefresh }) {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
    });

    const [patients, setPatients] = useState([]);

    const loadDoctorsPatients = async () => {
        try {
            const response = await axios.get("/api/appointments/patients");
            setPatients(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDoctorsPatients();
    }, []);

    const handleAddAppointment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/appointments/doctor/update",
                newAppointment
            );
            setRefresh(!refresh);
            setNewAppointment({
                patient_id: "",
                title: "",
                start: "",
                end: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    // filters the weeekday
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    // filters the time, you cannot select the time that has passed
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Add a New Event</h2>
                    <div>
                        <label htmlFor="choose_patient">Pick a patient:</label>
                        <select
                            className="form-control"
                            // value="selected"
                            name="patient_id"
                            id=""
                            defaultValue="selected"
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    patient_id: e.target.value,
                                })
                            }
                        >
                            <option value="selected" disabled>
                                Select a patient
                            </option>
                            {patients.map((patient) => (
                                <option
                                    key={patient.patient_id}
                                    value={patient.patient_id}
                                >
                                    {patient.user.first_name}{" "}
                                    {patient.user.surname}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <br />
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Add a appointment title"
                            value={newAppointment.title}
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Start Date:</label>
                        <DatePicker
                            className="form-control"
                            placeholderText="Click to select a start date"
                            selected={newAppointment.start}
                            filterTime={filterPassedTime}
                            filterDate={isWeekday}
                            showTimeSelect
                            withPortal
                            timeFormat="HH:mm"
                            injectTimes={[
                                setHours(setMinutes(new Date(), 1), 0),
                                setHours(setMinutes(new Date(), 5), 12),
                                setHours(setMinutes(new Date(), 59), 23),
                            ]}
                            dateFormat="MMMM d, yyyy h:mm"
                            onChange={(start) =>
                                setNewAppointment({ ...newAppointment, start })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">End Date: </label>
                        <DatePicker
                            className="form-control"
                            placeholderText="Click to select an end date"
                            filterTime={filterPassedTime}
                            filterDate={isWeekday}
                            selected={newAppointment.end}
                            showTimeSelect
                            withPortal
                            timeFormat="HH:mm"
                            injectTimes={[
                                setHours(setMinutes(new Date(), 1), 0),
                                setHours(setMinutes(new Date(), 5), 12),
                                setHours(setMinutes(new Date(), 59), 23),
                            ]}
                            dateFormat="MMMM d, yyyy h:mm"
                            onChange={(end) =>
                                setNewAppointment({ ...newAppointment, end })
                            }
                        />
                    </div>
                    <button
                        className="btn btn-success mt-4"
                        onClick={handleAddAppointment}
                    >
                        Schedule Meeting
                    </button>
                </div>
            </div>
        </div>
    );
}
