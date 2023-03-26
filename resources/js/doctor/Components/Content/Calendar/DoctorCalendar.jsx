import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import locales from "date-fns/locale/en-GB";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext/UserContext";
import DoctorDatepicker from "./DoctorDatepicker";

export default function DoctorCalendarComponent() {
    // FOR THE CALENDER TO WORK
    const [appointments, setAppointments] = useState([]);
    const { user } = useContext(UserContext);
    const [refresh, setRefresh] = useState(false);
    //setting up localizer for the calendar
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
        getDay,
        locales,
    });
    // setting up the calendar to be drag and drop
    const DnDCalendar = withDragAndDrop(Calendar);

    // fetching appointments according to the doctor_id
    const loadAppointments = async () => {
        try {
            const response = await axios.get(`api/doctors/show/${user.id}`);
            setAppointments(response.data.appointments);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadAppointments();
    }, [refresh]);

    //this is remaping data to the correct inputs for big calender component
    let meetings = [];
    if (appointments.length !== 0) {
        meetings = appointments.map((appointment) => {
            return {
                id: appointment.id,
                title: appointment.description,
                start: new Date(appointment.start),
                end: new Date(appointment.end),
                allDay: false,
                status: appointment.appointment_status_id,
            };
        });
    }
    console.log(meetings);

    return (
        <div>
            <DoctorDatepicker refresh={refresh} setRefresh={setRefresh} />
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
                eventPropGetter={(meetings) => {
                    const backgroundColor =
                        meetings.status === 1 ? "#C7120C" : "#1A6BC7";

                    return { style: { backgroundColor } };
                }}
            />
        </div>
    );
}
