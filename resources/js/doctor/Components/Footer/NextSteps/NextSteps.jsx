export default function NextSteps() {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4">Next Steps</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead">1. Improve User Onboarding</p>
                        <p>
                            Consider adding a tutorial or walkthrough to help
                            new users understand how to use your app. You could
                            also simplify the signup process to make it easier
                            for users to get started.
                        </p>
                        <p className="lead">3. Implement Push Notifications</p>
                        <p>
                            Push notifications can help keep users engaged and
                            informed about new content or features. Consider
                            implementing push notifications for important
                            events, such as new messages or updates to the app.
                        </p>
                        <p className="lead">5. Enhance Security Features</p>
                        <p>
                            Review your app's security features and consider
                            adding additional safeguards to protect user data.
                            This could include two-factor authentication or
                            encryption for sensitive data.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="lead">2. Expand Social Sharing Options</p>
                        <p>
                            Adding social sharing options can help users spread
                            the word about your app and increase visibility.
                            Consider adding sharing buttons for popular social
                            networks such as Twitter, Facebook, and LinkedIn.
                        </p>
                        <p className="lead">4. Improve Performance</p>
                        <p>
                            Review your app's performance and identify areas for
                            improvement. This could include optimizing images,
                            reducing server response time, or minimizing the
                            number of HTTP requests.
                        </p>
                        <p className="lead">6. Introduce In-App Purchases</p>
                        <p>
                            If your app provides value to users, consider
                            introducing in-app purchases to generate revenue.
                            This could include premium features, virtual goods,
                            or subscriptions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <iframe
                    width={500}
                    height={500}
                    src="https://embed.lottiefiles.com/animation/101532"
                ></iframe>
            </div>
        </>
    );
}
