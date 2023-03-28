import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import { addMinutes } from "date-fns";

export default function DoctorDatepicker({ refresh, setRefresh }) {
    const [newAppointment, setNewAppointment] = useState({
        patient_id: "selected",
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
        console.log(newAppointment);
        let { title, start, end, patient_id } = newAppointment;
        let dataToSend = {
            title: title,
            start: start.toString(),
            end: end.toString(),
            patient_id: patient_id,
        };
        try {
            const response = await axios.post(
                "/api/appointments/doctor/update",
                dataToSend
            );
            setRefresh(!refresh);
            setNewAppointment({
                patient_id: "selected",
                title: "",
                start: "",
                end: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    // filters the weeekday
    const isWeekdayWithPassedTime = (date) => {
        const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
        const selectedDate = new Date(new Date(date).setHours(0, 0, 0, 0));
        return (
            selectedDate >= currentDate &&
            (selectedDate.getDay() !== 0 || selectedDate.getDay() !== 6)
        );
    };

    // filters the time, you cannot select the time that has passed
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };
    // this used effect for checking if the newAppointment.start has changed, if it did
    // and it is not an empty string it will create a new varriable that is new date with half hour plus
    // and sets it as newappointment end
    useEffect(() => {
        if (newAppointment.start !== "") {
            let end = new Date(addMinutes(newAppointment.start, 30));
            setNewAppointment({ ...newAppointment, end });
        }
    }, [newAppointment.start]);

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
                            // defaultValue="selected"
                            value={newAppointment.patient_id}
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
                            {patients.map((patient) => {
                                return (
                                    <option
                                        key={patient.pivot.id}
                                        value={patient.patient_id}
                                    >
                                        {patient.user.first_name}{" "}
                                        {patient.user.surname}
                                    </option>
                                );
                            })}
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
                            filterDate={(date) => isWeekdayWithPassedTime(date)}
                            calendarStartDay={1}
                            showTimeSelect
                            withPortal
                            timeFormat="HH:mm"
                            injectTimes={[
                                setHours(setMinutes(new Date(), 1), 0),
                                setHours(setMinutes(new Date(), 5), 12),
                                setHours(setMinutes(new Date(), 59), 23),
                            ]}
                            dateFormat="MMMM d, yyyy h:mm"
                            onChange={(start) => {
                                console.log(start);
                                setNewAppointment({ ...newAppointment, start });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">End Date: </label>
                        <DatePicker
                            className="form-control"
                            placeholderText="Click to select an end date"
                            filterTime={filterPassedTime}
                            filterDate={(date) => isWeekdayWithPassedTime(date)}
                            calendarStartDay={1}
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
                            onChange={(end) => {
                                setNewAppointment({ ...newAppointment, end });
                            }}
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
