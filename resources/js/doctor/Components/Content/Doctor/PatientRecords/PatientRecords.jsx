import PatientRequest from "./PatientRequest/PatientRequest";
import PatientList from "./PatientList/PatientList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PatientRecords() {
    const [request, setRequest] = useState([]);
    const [patientList, setPatientList] = useState([]);
    const [state, setState] = useState(0); // after delete button the Patient list and Request will re-render


    const handleRequest = async () => {
        try {
            const response = await axios.get('/api/doctors/patient-request');
            setRequest(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePatientList = async () => {
        try {
            const response = await axios.get('/api/doctors/patient-list');
            setPatientList(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect((e) => {
        handlePatientList();
        handleRequest();
    }, [state]);



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PatientRequest
                            request={request}
                            state={state}
                            setState={setState} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PatientList
                            patientList={patientList}
                            state={state}
                            setState={setState} />
                    </div>
                </div>
            </div>
        </>
    )
}