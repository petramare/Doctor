import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../../UserContext/UserContext";

export default function Messages() {
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [messageCount, setMessageCount] = useState(0)
    const [doctors, setDoctors] = useState(null);
    const [patientId, setPatientId] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [messageTypes, setMessageTypes] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [messageSent, setMessageSent] = useState(0);
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    // Implement scroll at the last message - also included in useEffect
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const loadDoctors = async () => {
        try {
            let response = await axios.get(
                `/api/messages/patient-doctor/${user.id}`
            );
            setDoctors(response.data.accepted_doctor);
            setPatientId(response.data.patient_id);
            // console.log(response.data.doctors);
        } catch (error) {
            console.log(error);
        }
    };

    const loadMessages = async () => {
        try {
            let response = await axios.get(
                `/api/messages/dirrect/${doctors[selectedDoctor].doctor_id}/${patientId}`
            );
            setMessageCount(response.data.length)
            setMessages(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const loadMessageTypes = async () => {
        try {
            let response = await axios.get("/api/message-types");
            setMessageTypes(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectDoctor = (e) => {
        let selectedDoctorId = doctors[e.target.value].doctor_id;
        setSelectedDoctor(e.target.value);
        setNewMessage((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: selectedDoctorId,
            };
        });

        // console.log(e.target.value);
    };

    const handleChange = (e) => {
        setNewMessage((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/messages/insert",
                newMessage
            );
            setMessageSent(messageSent + 1);
            e.target.message.value = "";
            setErrorMessages([]);
            setSuccessMessage(response.status);
        } catch (error) {
            setSuccessMessage("");
            setErrorMessages(error.response.data.errors);
        }
    };

    const handleType = (e) => {
        switch (e) {
            case 1:
                return "primary";
            case 2:
                return "secondary";
            case 3:
                return "warning";
            case 4:
                return "danger";
            case 5:
                return "light";
            default:
                return "dark";
        }
    };

    useEffect(() => {
        if (user) {
            loadDoctors();
            loadMessageTypes();
            loadMessages();
            scrollToBottom();
        }
    }, [user, messageSent, selectedDoctor]);

    // Seems to be working for scrolling on new message and change of conversation
    useEffect(() => {
        scrollToBottom();
    }, [messageCount]);

    // trying interval
    useEffect(() => {
        if (selectedDoctor) {
            const interval = setInterval(() => {
                loadMessages();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [selectedDoctor]);

    return (
        <>
            <div className="container">
                <select
                    name="doctor_id"
                    className="form-control mt-2 mb-2"
                    aria-label="Floating label select example"
                    onChange={handleSelectDoctor}
                    required
                >
                    <option value={null} disabled selected>
                        -- Select Your Doctor --
                    </option>
                    {doctors
                        ? doctors.map((doctor, i) => {
                              return (
                                  <option value={i} key={i}>
                                      {doctor.user.first_name}{" "}
                                      {doctor.user.surname}
                                      {" - "}
                                      {doctor.specialization}
                                  </option>
                              );
                          })
                        : "load"}
                </select>
                <h1>
                    {selectedDoctor && doctors ? (
                        <>
                            Communication with{" "}
                            {doctors[selectedDoctor].user.first_name}{" "}
                            {doctors[selectedDoctor].user.surname}
                        </>
                    ) : (
                        ""
                    )}
                </h1>

                <div
                    className="row overflow-auto"
                    style={{ height: 400 + "px" }}
                >
                    <div className="col"></div>
                    {messages.map((message, i) => {
                        return (
                            <div key={i}>
                                <div ref={messagesEndRef} />
                                <div
                                    className={`alert alert-${
                                        message.sender_user_id ==
                                        message.patient.user_id
                                            ? "light"
                                            : "dark"
                                    }`}
                                >
                                    <div className="alert-heading d-flex justify-content-between">
                                        <div>
                                            {message.user.first_name}{" "}
                                            {message.user.surname}
                                            <p>
                                                {new Date(
                                                    message.created_at
                                                ).toLocaleString("cs-CS")}
                                            </p>
                                        </div>
                                        <div
                                            className={`btn btn-${handleType(
                                                message.message_type_id
                                            )} btn-sm mx-2 my-0 px-2 py-0 d-flex justify-content-center align-items-center`}
                                        >
                                            {message.message_type.description}{" "}
                                        </div>
                                    </div>
                                    <hr />
                                    <h5>{message.message}</h5>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {selectedDoctor ? (
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <textarea
                                className="form-control mt-2 mb-2"
                                name="message"
                                rows="5"
                                placeholder="Enter Your Message"
                                onChange={handleChange}
                            ></textarea>
                            <select
                                name="message_type_id"
                                className="form-control mt-2 mb-2"
                                aria-label="Floating label select example"
                                onChange={handleChange}
                            >
                                <option value={99} disabled selected>
                                    -- Select Message Type --
                                </option>
                                {messageTypes
                                    ? messageTypes.map((type, i) => {
                                          return (
                                              <option value={type.id} key={i}>
                                                  {type.description}
                                              </option>
                                          );
                                      })
                                    : "load"}
                            </select>
                            {errorMessages
                                ? Object.values(errorMessages).map(
                                      (message, i) => {
                                          return (
                                              <div
                                                  key={i}
                                                  className="alert alert-danger"
                                                  role="alert"
                                              >
                                                  {message}
                                              </div>
                                          );
                                      }
                                  )
                                : ""}
                            <button
                                type="submit"
                                className="btn mt-2 mb-2 btn-primary"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
