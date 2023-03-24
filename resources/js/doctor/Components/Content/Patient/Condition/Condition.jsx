import React, { useState, useEffect, useContext } from "react";
import axios from "axios";


export default function PatientCondition(){

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    const data = {
      height,
      weight,
      history,
      date,
    };

    try {
        const response = await axios.post("/api/patient/condition", data);
        console.log(response);
      } catch (error) {
        console.log(error);
      } 
  };

    return(
    <div>
     
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="patientID">Patient ID:</label>
        <input
          type="text"
          id="patientID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        /> */}

        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="history">Medical History:</label>
        <textarea
          id="history"
          value={history}
          onChange={(e) => setHistory(e.target.value)}
        ></textarea>

        <input type="hidden" id="date" value={new Date().toISOString()} />

        <button type="submit">Submit</button>
      </form>
        <div className="patient_condition_history" >
          
                <h2>Patient Data</h2>
          
                {result.map((result, index) => (
                                <tr key={index}>
                                    {/* <th 
                                    scope="row">{index + 1}
                                    </th> */}
                                    <td>
                                      {result.weight} {result.height}
                                    </td>
                                </tr>
                            ))}
                   {/* <ul>
                    <li>
                    height: {height.value}
                  </li>
                  <li></li>
          
                </ul> */}
        </div>
      </div>
      )
      }
