import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export default function DoctorDatepicker() {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
    });

    const [patients, setPatients] = useState([]);

    const loadDoctorsPatients = async () => {
        try {
            const response = await axios.get(
                "http://www.doctor.test/api/appointments/patients"
            );
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
                "/api/appointments/update",
                newAppointment
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Add a New Event</h2>
                    <div>
                        <label htmlFor="choose_patient">Pick a patient:</label>
                        <select
                            name="patient_id"
                            id=""
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    patient_id: e.target.value,
                                })
                            }
                        >
                            <option value="">Select a patient</option>
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
                            placeholderText="Start Date"
                            selected={newAppointment.start}
                            showTimeSelect
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
                            placeholderText="End Date"
                            selected={newAppointment.end}
                            showTimeSelect
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
                        className="btn btn-success"
                        onClick={handleAddAppointment}
                    >
                        Schedule Meeting
                    </button>
                </div>
            </div>
        </div>
    );
}
