import { useEffect } from "react";

export default function NextSteps() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4">Next Steps</h1>
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-6">
                            <p className="lead">1. Implement Emails</p>
                            <p className="lead">3. Implement Manager role</p>
                            <p className="lead">
                                5. Filter messages by type and allow export
                            </p>
                            <p className="lead">
                                2. Search for Doctors by location
                            </p>
                            <p className="lead">4. Doctors Ratings</p>
                            <p className="lead">
                                6. Generating Timesheets for Doctors and
                                Managers
                            </p>
                        </div>
                        <iframe
                            width={500}
                            height={500}
                            src="https://embed.lottiefiles.com/animation/101532"
                        ></iframe>
                    </div>
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="h1 my-5 py-5">...</div>
                        <div className="h3  my-5 py-5">Just messing with you</div>
                        <div className="h1 my-5 py-5">
                            We are gonna get wasted today and never come back to
                            this project
                        </div>
                        <iframe className="p-0 m-0"
                            width={500}
                            height={500}
                            src="https://embed.lottiefiles.com/animation/29774"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
