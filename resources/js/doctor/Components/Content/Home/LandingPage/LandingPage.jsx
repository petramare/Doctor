import { Link } from "react-router-dom";
import "./LandingPage.scss";

<Link to="/register"></Link>;

export default function LandingPage() {
    return (
        <>
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

                            <section className="hero-section">
                                <div className="container">
                                    <div className="row align-items-center my-5 py-5">
                                        <div className="col-md-6 d-flex flex-column align-items-end px-3">
                                            <h1 className="text-end">
                                                Be reachable to your Patients
                                            </h1>
                                            <p className="lh-lg text-end">
                                                Allow potential patients to find
                                                You, and Your current Patients
                                                to schedule an Appointment with
                                                you in a few clicks.
                                            </p>
                                            <Link
                                                className="btn btn-primary btn-lg"
                                                to="/register"
                                            >
                                                Register as a Doctor
                                            </Link>
                                        </div>
                                        <div className="col-md-6">
                                            <iframe
                                                width={500}
                                                height={500}
                                                src="https://embed.lottiefiles.com/animation/96413"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base text-left my-5 py-5 text-primary">
                                        Whether You are a Patient or a Doctor
                                        our platform aims to make the
                                        communication between Patients and
                                        Doctors effective.
                                    </blockquote>
                                    <div className="row align-items-center my-5 py-5">
                                        <div className="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/131043"
                                            ></iframe>
                                        </div>
                                        <div className="col-md-6">
                                            <h1>
                                                Have messages from Your Doctors
                                                in one place
                                            </h1>
                                            <p className="lh-lg">
                                                There is no need to dig in your
                                                email account for memos from
                                                your Doctor. Have all the
                                                information available to stay
                                                healthy and informed.
                                            </p>
                                            <Link
                                                className="btn btn-primary btn-lg"
                                                to="/register"
                                            >
                                                Register as a Patient
                                            </Link>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base my-5 py-5 text-end text-primary">
                                        Contacting your Doctor has never been
                                        easier.
                                    </blockquote>
                                    <div className="row align-items-center my-5 py-5">
                                        <div className="col-md-6 d-flex flex-column align-items-end">
                                            <h1 className="text-end">
                                                Find specialist to suit your
                                                needs{" "}
                                            </h1>
                                            <p className="lh-lg text-end">
                                                Found a new Doctor? Let them
                                                know you want to be their
                                                patient. Once they will approve
                                                you - you can schedule your
                                                first appointment.
                                            </p>
                                            <a
                                                href="#"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/101860"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <blockquote className="col display-5 lh-base my-5 py-5 text-primary">
                                        Be visible to your potential patients,
                                        and let them contact you via
                                        <strong> CalenDr.</strong>
                                    </blockquote>
                                    <div className="row align-items-center my-5 py-5">
                                        <div className="col-md-6">
                                            <iframe
                                                width={400}
                                                height={400}
                                                src="https://embed.lottiefiles.com/animation/101574"
                                            ></iframe>
                                        </div>
                                        <div className="col-md-6">
                                            <h1>Do you miss some feature?</h1>
                                            <p className="lh-lg text-primary">
                                                Let us know what would You like
                                                see in CalenDr and we can
                                                promise You -{" "}
                                                <strong className="text-primary">
                                                    we will never do it. -
                                                    Because this is just Final
                                                    Project dude - We've got
                                                    bills to pay - ain't nobody
                                                    got time for that.
                                                </strong>
                                            </p>
                                            <Link
                                                className="btn btn-primary btn-lg"
                                                to="/about-us"
                                            >
                                                <strong>Contact Us</strong><br/>{" "}
                                                (preferably with job offers)
                                            </Link>
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
