import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";

import locales from "date-fns/locale/en-GB";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CalendarComponent() {
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    const [appointments, setAppointments] = useState([]);

    const loadAppointments = async () => {
        try {
            const response = await axios.get(`/appointments/1`);
            setAppointments(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadAppointments();
    }, []);

    return (
        <div>
            {appointments ? (
                appointments.map((appointment) => (
                    <div key={appointment.id}>{appointment.description}</div>
                ))
            ) : (
                <div>loading..</div>
            )}
        </div>
    );
}
