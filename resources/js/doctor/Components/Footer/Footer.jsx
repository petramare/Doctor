import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/about-us" className="nav-link">
                        About Us
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/techstack" className="nav-link">
                        Tech Stack
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/lessons-learnt" className="nav-link">
                        Lessons Learnt
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/next-steps" className="nav-link">
                        Next Steps
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/qa" className="nav-link">
                        Q&A
                    </Link>
                </li>
              </ul>


            <p className="text-center text-light">
                Copyright &#169; CalenDr. All rights reserved.
            </p>
        </footer>
    );
}
