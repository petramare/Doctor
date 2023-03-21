import LandingPage from "../LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

export default function Content() {

    return (
        <main>
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                </Routes>
            </div>
        </main>
    )
}