export default function PatientHome() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Welcome back, /NAME/</h1>
                        <h3>Here is your doctors schedule:</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="calendar">/CALENDAR/</div>
                    </div>
                </div>
            </div>

        </>
    )
}