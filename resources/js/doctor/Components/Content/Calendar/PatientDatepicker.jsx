import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import { addMinutes } from "date-fns";

export default function PatientDatepicker({
    doctor_id,
    refresh,
    setRefresh,
    visiting_hours,
}) {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
        doctor_id: doctor_id,
    });

    const handleAddAppointment = async (e) => {
        e.preventDefault();

        let { title, start, end, doctor_id } = newAppointment;
        let dataToSend = {
            title: title,
            start: start.toString(),
            end: end.toString(),
            doctor_id: doctor_id,
        };
        try {
            const response = await axios.post(
                "/api/appointments/patient/update",
                dataToSend
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

    const visiting_hours_stringified = JSON.parse(visiting_hours);

    const getFalseDays = (visiting_hours) => {
        const falseDays = [];
        Object.keys(visiting_hours).forEach((day, index) => {
            if (!visiting_hours[day]) {
                falseDays.push(index + 1);
            }
        });
        // console.log(falseDays);
        return falseDays;
    };

    // filters the time, you cannot select the time that has passed
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const isWeekdayWithVisitingHoursWithPassedTime = (date, visiting_hours) => {
        const falseDays = getFalseDays(visiting_hours);
        const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
        const selectedDate = new Date(new Date(date).setHours(0, 0, 0, 0));

        return (
            selectedDate >= currentDate &&
            !falseDays.includes(selectedDate.getDay()) &&
            selectedDate.getDay() !== 0 &&
            selectedDate.getDay() !== 6
        );
    };

    useEffect(() => {
        if (newAppointment.start !== "") {
            let end = new Date(addMinutes(newAppointment.start, 30));
            setNewAppointment({ ...newAppointment, end });
        }
    }, [newAppointment.start]);

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
                        filterDate={(date) =>
                            isWeekdayWithVisitingHoursWithPassedTime(
                                date,
                                visiting_hours_stringified
                            )
                        }
                        filterTime={filterPassedTime}
                        showTimeSelect
                        withPortal
                        timeFormat="HH:mm"
                        calendarStartDay={1}
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
                        calendarStartDay={1}
                        filterDate={(date) =>
                            isWeekdayWithVisitingHoursWithPassedTime(
                                date,
                                visiting_hours_stringified
                            )
                        }
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
