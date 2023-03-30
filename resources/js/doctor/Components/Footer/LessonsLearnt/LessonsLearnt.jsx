import { useEffect } from "react";

export default function LessonsLearnt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="lessons-learned" className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Lessons Learned</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p className="lh-lg">
                                        <blockquote className="blockquote mb-0">
                                            I believe we have made some weird
                                            choices in DB desing.
                                        </blockquote>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p className="lh-lg">
                                        <blockquote className="blockquote mb-0">
                                            Hey guys - so have we really been
                                            doing the same thing each of us for
                                            the last 8 hours?
                                        </blockquote>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>
                                        <blockquote className="blockquote mb-0">
                                            Make sure to include this file in
                                            the gitignore - you mean the one
                                            I've just merged to main?
                                        </blockquote>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container d-flex justify-content-center">
                <iframe
                    width={500}
                    height={500}
                    src="https://embed.lottiefiles.com/animation/138605"
                ></iframe>
            </div>
        </>
    );
}
