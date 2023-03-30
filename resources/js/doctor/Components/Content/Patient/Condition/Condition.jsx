import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import './Condition.scss';


export default function PatientCondition() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState("");
  const [results, setResults] = useState([]);
  const [messages, setMessages] = useState({
    status: '',
    messages: []
  });

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
      setMessages({
        status: 'success',
        messages: ['Success message']
      })
    } catch (error) {
      console.log(error);
      setMessages({
        status: 'error',
        messages: error.response.data.errors
      })
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

  useEffect(() => {
    getConditions();

  }, [savedCondition]);

  return (
    <>
      <div className="condition-form">
  
        <form onSubmit={handleSubmit}>
  
          <div className="form-group">
                <input
                  className="form-control item"
                  placeholder="Height"
                  type="text"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
          </div>
  
          <div className="form-group">
                <input
                  className="form-control item"
                  placeholder="Weight"
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
            </div>
  
          <div className="form-group">
                <textarea
                  className="form-control item"
                  placeholder="History"
                  id="history"
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                ></textarea>
            </div>    
            <input className="form-control item" type="hidden" id="date" value={new Date().toISOString()} />
              <div className="form-group">
                <button 
                className="create-form" type="submit" >
                  Submit
                </button>
              </div>
        </form>
        </div>
  
        <div className="patient_condition_history" >
  
          
          <h2>Patients' condition: </h2>
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
          {messages.messages ? (
            Object.values(messages.messages).map((message, index) => {
              return (
  
                <div className={messages.status == 'success' ? "alert alert-success" : "alert alert-danger"} role="alert" key={index}>{message}
                </div>
              )
            })
  
          )
            :
            ''
          }
        </div>
    </>
    
  )
}
