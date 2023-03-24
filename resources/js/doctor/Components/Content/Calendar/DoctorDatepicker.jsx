import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function DoctorDatepicker() {
    const [newAppointment, setNewAppointment] = useState({
        title: "",
        start: "",
        end: "",
    });

    const handleAddAppointment = () => {};

    return (
        <>
            <h2>Add a New Event</h2>
            <div className="col">
                <input
                    type="text"
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
