import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext/UserContext";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import setHours from "date-fns/setHours";
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
                status: appointment.appointment_status_id,
                patient_id: appointment.patient_id,
                id: appointment.id,
                title: "Booked",
                start: new Date(appointment.start),
                end: new Date(appointment.end),
                allDay: false,
            };
        });
    }
    // setting min a max time for the days view to show
    const minTime = new Date(new Date().setHours(8, 0, 0));
    const maxTime = new Date(new Date().setHours(17, 0, 0));

    return (
        <div>
            {/* {console.log(meetings)} */}
            {/* {console.log(doctorAppointment)} */}
            <Calendar
                localizer={localizer}
                min={minTime}
                max={maxTime}
                events={meetings}
                defaultView={"work_week"}
                views={["day", "work_week"]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                eventPropGetter={(meetings) => {
                    const backgroundColor =
                        meetings.patient_id ===
                        doctorAppointment.pivot.patient_id
                            ? meetings.status === 1
                                ? "#E0A553"
                                : meetings.status === 2
                                ? "red"
                                : "green"
                            : "#1A6BC7";
                    return { style: { backgroundColor } };
                }}
            />
        </div>
    );
}
