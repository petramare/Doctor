import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";

export default function DoctorDatepicker() {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
    });

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
        <>
            <h2>Add a New Event</h2>
            <div className="col">
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
                <DatePicker
                    placeholderText="Start Date"
                    selected={newAppointment.start}
                    onChange={(start) =>
                        setNewAppointment({ ...newAppointment, start })
                    }
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newAppointment.end}
                    onChange={(end) =>
                        setNewAppointment({ ...newAppointment, end })
                    }
                />
                <button
                    className="btn btn-success"
                    onClick={handleAddAppointment}
                >
                    Schedule Meeting
                </button>
            </div>
        </>
    );
}
