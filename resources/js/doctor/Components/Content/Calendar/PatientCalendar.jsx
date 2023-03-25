import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext/UserContext";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import locales from "date-fns/locale/en-GB";
import axios from "axios";

export default function PatientCalendarComponent({ doctorAppointment }) {
    const { user } = useContext(UserContext);

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
        getDay,
        locales,
    });

    let meetings = [];
    if (doctorAppointment.appointments.length !== 0) {
        meetings = doctorAppointment.appointments.map((appointment) => {
            return {
                id: appointment.id,
                title: "Booked",
                start: new Date(appointment.start),
                end: new Date(appointment.end),
                allDay: false,
            };
        });
    }

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={meetings}
                defaultView={"work_week"}
                views={["day", "work_week"]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
            />
        </div>
    );
}
