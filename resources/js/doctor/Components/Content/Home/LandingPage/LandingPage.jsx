import { Link } from "react-router-dom";
import "./LandingPage.scss";

export default function LandingPage() {
    return (
        <>
            <h1 className="display-1 text-center">
                Premium healthcare service
            </h1>
            <div className="jumbotron jumbotron-fluid">
                <div className="text-white text-center my-5">
                    <h2 className="display-3">
                        Virtual personal assistent CalenDr.
                    </h2>
                    <p>
                        Offering private healthcare services for international
                        and Czech clients in Prague
                    </p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <Link to="/login">
                            <button className="btn btn-primary btn-lg">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div className="col text-center">
                        <Link to="/register">
                            <button className="btn btn-primary btn-lg">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h4 className="text-center text-uppercase">
                            Info about the platform
                        </h4>
                        <p className="text-justify">
                            The platform for doctors is a powerful tool designed
                            to streamline the process of scheduling appointments
                            between doctors and their patients. With this
                            platform, doctors can easily manage their schedules
                            and plan their appointments in an efficient manner,
                            without the need for manual appointment bookings.
                            The platform features a calendar system that allows
                            doctors to set their availability and schedule
                            appointments with ease. This makes it easier for
                            doctors to manage their busy schedules and ensures
                            that patients can easily find a convenient time to
                            schedule an appointment. Patients can also sign in
                            to the platform and schedule a meeting with a doctor
                            that suits their needs. Additionally, the platform
                            can be used by clinics to oversee the schedules of
                            multiple doctors and plan their time in a way that
                            maximizes efficiency. This feature is particularly
                            useful for large clinics that have multiple doctors
                            working at the same time. With its user-friendly
                            interface and powerful scheduling tools, the
                            platform for doctors is the ideal solution for
                            doctors, clinics, and patients alike. It simplifies
                            the process of scheduling appointments, saves time,
                            and ensures that patients receive the care they need
                            when they need it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
