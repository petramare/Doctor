import LandingPage from "./Home/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Home/LoginPage/LoginPage";
import RegisterUser from "./Home/RegisterUser/RegisterUser";
import PatientHome from "./Patient/Home/PatientHome";
import PatientInfo from "./Patient/EditInfo/EditInfo";
import PatientFind from "./Patient/FindDoctor/FindDoctor";

export default function Content() {

    return (
        <main>
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterUser />} />
                    <Route path='/patient' element={<PatientHome />} />
                    <Route path='/patient/edit' element={<PatientInfo />} />
                    <Route path='/patient/find' element={<PatientFind />} />
                </Routes>
            </div>
        </main>
    )
}