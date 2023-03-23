import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import locales from "date-fns/locale/en-GB";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CalendarComponent() {
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
        getDay,
        locales,
    });
    // setting up the calendar to be drag and drop
    const DnDCalendar = withDragAndDrop(Calendar);

    const [appointments, setAppointments] = useState([]);
    // fetching appointments according to the doctor_id
    const loadAppointments = async () => {
        try {
            const response = await axios.get(`api/appointments/1`);
            setAppointments(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadAppointments();
    }, []);

    //this is remaping data to the correct inputs for big calender component
    const meetings = appointments.map((appointment) => {
        return {
            id: appointment.id,
            title: appointment.description,
            start: new Date(appointment.start + "Z"),
            end: new Date(appointment.end + "Z"),
            allDay: false,
        };
    });

    // console.log("render");

    return (
        <DnDCalendar
            localizer={localizer}
            events={meetings}
            startAccessor="start"
            selectable
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            onEventDrop={function noRefCheck() {
                console.log("hey");
            }}
            onEventResize={function noRefCheck() {}}
        />
    );
}
