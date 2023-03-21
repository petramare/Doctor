import { Link } from 'react-router-dom';

export default function LandingPage() {



    return (
        <div className="container landing_page">

            <div className="container landing_page-header">
                <h1>
                    Premium healthcare service
                </h1>
            </div >

            <div className="container landing_page-about">
                <h2 className="container landing_page-about--header">
                    Virtual personal assistent CalenDr.
                </h2>
                <p className="container landing_page-about--detail">
                    Offering private healthcare services for international and Czech clients in Prague
                </p>
            </div>

            <div className="container landing_page-button">
                <Link to='/login'><button className="container landing_page-button--login">
                    Login
                </button>
                </Link>
                <Link to='/register'>
                    <button className="container landing_page-button--register">
                        Register
                    </button>
                </Link>
            </div>

        </div>


    )
}