import { useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import CalendarComponent from "../../Calendar/Calendar";

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
                                    <CalendarComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // add a loader
                <div>loading...</div>
            )}
        </>
    );
}
