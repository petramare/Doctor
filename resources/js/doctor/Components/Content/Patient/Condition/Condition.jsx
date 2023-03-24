import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function PatientCondition(){

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState("");
  const [results, setResults] = useState([]);

  const [savedCondition, setSavedCondition] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    const data = {
      height,
      weight,
      history,
      date,
    };

    //axios for the sending data after fillling input into the form and saving to DB
    try {
      const response = await axios.post("/api/patient/condition", data);
      setSavedCondition(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } 

    //get the data from the DB and dislaying them
  };
  const getConditions = async () => {
    try {
        const response = await axios.get("/api/patient/conditions");
        console.log(response);
        setResults(response.data);
      } catch (error) {
        console.log(error);
      } 
  }
  
  useEffect(()=>{
    getConditions();

  },[savedCondition]);

    return (
    <div>
     
      <form onSubmit={handleSubmit}>

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

        <button type="submit" >Submit</button>
      </form>
        <div className="patient_condition_history" >

        {/* data are being showed below the form with input */}
        <h2>Patient Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>History</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td>{result.date}</td>
                      <td>{result.weight}</td>
                      <td>{result.height}</td>
                      <td>{result.history}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      </div>
      )
}
