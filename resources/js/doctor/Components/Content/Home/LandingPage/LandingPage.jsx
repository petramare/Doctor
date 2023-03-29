import { Link } from "react-router-dom";
import "./LandingPage.scss";

export default function LandingPage() {
    return (
        <>
            {/* <div className="jumbotron jumbotron-fluid">
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
            </div> */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="m-5 container d-flex flex-column justify-content-center align-items-center">
                            <div className="m-5 col-6 container d-flex flex-row justify-content-center align-items-center">
                                <h1 className="col-9 mx-5 px-4 display-5">
                                    Welcome to{" "}
                                    <div className="display-1 text-strong text-primary">
                                        <b>CalenDr.</b>
                                    </div>
                                </h1>
                                <blockquote className="col-9 display-5 lh-base text-primary">
                                    Bringing Patients and Doctors closer
                                </blockquote>
                            </div>

                            <section class="hero-section">
                                <div class="container">
                                    <div class="row align-items-center my-5 py-5">
                                        <div class="col-md-6 d-flex flex-column align-items-end px-3">
                                            <h1>Let your Patients</h1>
                                            <p>
                                                Keep track of your schedule with
                                                our easy-to-use calendar app.
                                            </p>
                                            <a
                                                href="#"
                                                class="btn btn-primary btn-lg"
                                            >
                                                Register as a Doctor
                                            </a>
                                        </div>
                                        <div class="col-md-6">
                                            <iframe
                                                width={500}
                                                height={500}
                                                src="https://embed.lottiefiles.com/animation/96413"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base my-5 py-5 text-primary">
                                        Whether You are Patient or Doctor our
                                        platform aim to make communication
                                        between Patients and Doctors effective.
                                    </blockquote>
                                    <div class="row align-items-center my-5 py-5">
                                        <div class="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/131043"
                                            ></iframe>
                                        </div>
                                        <div class="col-md-6">
                                            <h1>Your Personal Calendar</h1>
                                            <p>
                                                Keep track of your schedule with
                                                our easy-to-use calendar app.
                                            </p>
                                            <a
                                                href="#"
                                                class="btn btn-primary btn-lg"
                                            >
                                                Download Now
                                            </a>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base my-5 py-5 text-primary">
                                        Be able to contact your Doctor directly
                                        - have all the communication at one
                                        place.{" "}
                                    </blockquote>
                                    <div class="row align-items-center my-5 py-5">
                                        <div class="col-md-6 d-flex flex-column align-items-end">
                                            <h1>Your Personal Calendar</h1>
                                            <p>
                                                Keep track of your schedule with
                                                our easy-to-use calendar app.
                                            </p>
                                            <a
                                                href="#"
                                                class="btn btn-primary btn-lg"
                                            >
                                                Download Now
                                            </a>
                                        </div>
                                        <div class="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/101860"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base my-5 py-5 text-primary">
                                        Search for Specialists who will help you with your Health Issues - Be visible for your potential new patients, let them contact you via CalenDr. 
                                    </blockquote>
                                    <div class="row align-items-center my-5 py-5">
                                        <div class="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/101574"
                                            ></iframe>
                                        </div>
                                        <div class="col-md-6">
                                            <h1>Your Personal Calendar</h1>
                                            <p>
                                                Keep track of your schedule with
                                                our easy-to-use calendar app.
                                            </p>
                                            <a
                                                href="#"
                                                class="btn btn-primary btn-lg"
                                            >
                                                Download Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
