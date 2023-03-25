import { useContext, useState } from "react";
import UserContext from "../../UserContext/UserContext";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import locales from "date-fns/locale/en-GB";
import axios from "axios";

export default function PatientCalendarComponent() {
    const { user } = useContext(UserContext);

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
        getDay,
        locales,
    });

    return (
        <div>
            <Calendar
                localizer={localizer}
                // events={}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
            />
        </div>
    );
}
