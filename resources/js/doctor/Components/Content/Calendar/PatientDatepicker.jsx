import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";

export default function PatientDatepicker({ doctor_id, refresh, setRefresh }) {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
        doctor_id: doctor_id,
    });
    const handleAddAppointment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/appointments/patient/update",
                newAppointment
            );
            setRefresh(!refresh);
            setNewAppointment({
                title: "",
                start: "",
                end: "",
                doctor_id: doctor_id,
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
        <div className="row">
            <div className="col text-center">
                <h2>Add a New Event</h2>
                <div>
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
                        filterDate={isWeekday}
                        filterTime={filterPassedTime}
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
                        selected={newAppointment.end}
                        filterDate={isWeekday}
                        filterTime={filterPassedTime}
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
    );
}
