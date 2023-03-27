import axios from "axios";

export default function PatientApply({ result, setApplied }) {
    // Apply button
    const handleClick = (e) => {
        e.preventDefault();
        sendRequest(e);
    }
    //change in table doctor_patient->status('applied')
    const sendRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/patient/request`, {
                doctor: result.doctor.doctor_id,
                status: 'applied'
            })
            console.log(response)
            setApplied(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button className="btn btn-success" onClick={handleClick}>Apply</button>
        </>
    )
}