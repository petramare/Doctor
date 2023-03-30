import { useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import DoctorCalendarComponent from "../../Calendar/DoctorCalendar";
import AppointmentsList from "./AppointmentsList/AppointmentsList";
import { useState } from "react";
import ColorLegendDoctor from "../ColorLegend/ColorLegendDoctor";

export default function DoctorHome() {
    const [appList, setAppList] = useState([]);
    const { user } = useContext(UserContext);
    return (
        <>
            {user ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center mt-5 mb-5">
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="calendar">
                                    <AppointmentsList
                                        appList={appList}
                                        setAppList={setAppList}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The monthly schedule:</h2>
                            </div>
                        </div>
                    </div> */}
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
            < ColorLegendDoctor />
        </>
    );
}
