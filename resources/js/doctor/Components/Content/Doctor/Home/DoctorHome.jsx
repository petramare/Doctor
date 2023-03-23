import Calendar from "../../Calendar/CalendarComponent";

export default function DoctorHome() {
    return (
        <>
            <CalendarComponent />;
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Welcome back, /NAME/</h1>
                        <h3>Here is your schedule for today:</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="calendar">/CALENDAR/</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>The monthly schedule:</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="calendar">/CALENDAR/</div>
                    </div>
                </div>
            </div>
        </>
    );
}
