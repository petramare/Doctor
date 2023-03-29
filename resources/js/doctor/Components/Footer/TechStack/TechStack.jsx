import style from "./TechStack.scss";

export default function TechStack() {
    return (
        <>
            <div className="container my-5 d-flex flex-column justify-content-center align-items-center align-self-center">
                <h1>
                    <strong>CalenDr</strong> is proudly build using the
                    following Tech Stack
                </h1>
                <hr />
                <div className="container">
                    <div className="container d-flex flex-wrap justify-content-center align-items-center align-self-center">
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/html.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/css.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/js.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/php.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/laravel.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/react.png"
                                alt="Card image cap"
                            />
                        </div>
                    </div>

                    <div className="container d-flex">
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/composer.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/npm.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/vitejs.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/github.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/slack.png"
                                alt="Card image cap"
                            />
                        </div>
                        <div className="card stack">
                            <img
                                className="card-img-top"
                                src="img/techstack/trello.png"
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
