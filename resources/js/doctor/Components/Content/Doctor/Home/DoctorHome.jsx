import { useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import DoctorCalendarComponent from "../../Calendar/DoctorCalendar";

export default function DoctorHome() {
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
                                <h3>Here is your schedule for today:</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="calendar"></div>
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
                                <div className="calendar">
                                    <DoctorCalendarComponent />
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
