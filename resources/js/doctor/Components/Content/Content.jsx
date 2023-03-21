import LandingPage from "../LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";

export default function Content() {

    return (
        <main>
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    {/* <Route path='/register' element={<RegisterUser />} /> */}
                </Routes>
            </div>
        </main>
    )
}