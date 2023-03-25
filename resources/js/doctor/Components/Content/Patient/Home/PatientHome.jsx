import { useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import PatientCalendarComponent from "../../Calendar/PatientCalendar";

export default function PatientHome() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>
                                <h3>
                                    Here are your doctors schedule for this
                                    month:
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="calendar">
                                    <PatientCalendarComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}
        </>
    );
}
