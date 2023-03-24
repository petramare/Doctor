import axios from "axios";

export default function PatientApply({ result, status, setStatus }) {

    const handleClick = (e) => {
        e.preventDefault();
        sendRequest(e);
        setStatus(status + 1);
    }

    const sendRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/patient/request`, {
                doctor: result.doctor.doctor_id,
                status: 'applied'
            })
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