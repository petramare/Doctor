import LandingPage from "./Home/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Home/LoginPage/LoginPage";
import RegisterUser from "./Home/RegisterUser/RegisterUser";
import PatientHome from "./Patient/Home/PatientHome";
import PatientInfo from "./Patient/EditInfo/EditInfo";
import PatientFind from "./Patient/FindDoctor/FindDoctor";
import ManagerEditInfo from "./Manager/EditInfo/EditInfo";
import ManagerFind from "./Manager/FindDoctor/FindDoctor";
import AdditionalRegistrationManager from "./Manager/AdditionalRegistration/AdditionalRegistration";
import AdditionalRegistrationPatient from "./Patient/AdditionalRegistration/AdditionalRegistration";
import AdditionalRegistrationDoctor from "./Doctor/AdditionalRegistration/AdditionalRegistration";
import DoctorFind from "./Doctor/FindClinic/FindClinic";
import DoctorInfo from './Doctor/EditInfo/EditInfo';
import DoctorHome from './Doctor/Home/DoctorHome';
import DoctorPatientRecords from './Doctor/PatientRecords/PatientRecords';
import ManagerHome from './Manager/Home/ManagerHome';
import PatientMessages from "./Patient/Messages/Messages";
import DoctorMessages from "./Doctor/Messages/Messages";

export default function Content() {
    return (
        <main className="">
            <div>
                <Routes>
                    {/* general routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterUser />} />

                    {/* patient routes */}
                    <Route path="/patient" element={<PatientHome />} />
                    <Route path="/patient/additional-registration" element={<AdditionalRegistrationPatient />} />
                    <Route path="/patient/messages" element={<PatientMessages />} />
                    <Route path="/patient/edit" element={<PatientInfo />} />
                    <Route path="/patient/find" element={<PatientFind />} />

                    {/* manager routes */}
                    <Route path="/managers" element={<ManagerHome />} />
                    <Route path="/managers/additional-registration" element={<AdditionalRegistrationManager />} />
                    <Route path="/managers/edit" element={<ManagerEditInfo />}/>
                    <Route path="/managers/find" element={<ManagerFind />} />
                    
                    {/* doctor routes */}
                    <Route path='/doctor' element={<DoctorHome />} />
                    <Route path="/doctor/additional-registration" element={<AdditionalRegistrationDoctor />} />
                    <Route path="/doctor/messages" element={<DoctorMessages />} />
                    <Route path='/doctor/edit' element={< DoctorInfo />} />
                    <Route path='/doctor/find' element={< DoctorFind />} />
                    <Route path='/doctor/patientRecords' element={<DoctorPatientRecords />} />
                </Routes>
            </div>
        </main>
    );
}
