import React from "react";

const ColorLegendPatient = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: "60%",
                right: 0,
                transform: "translateY(-50%)",
                backgroundColor: "white",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                zIndex: 1,
                fontSize: "12px",
            }}
        >
            <button
                style={{
                    backgroundColor: "#E0A553",
                    cursor: "default",
                    marginBottom: "20px",
                    borderRadius: "50%",
                    width: "75px",
                    height: "75px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    color: "#fffeea",
                }}
                disabled
            >
                Suggested
            </button>

            <button
                style={{
                    backgroundColor: "green",
                    cursor: "default",
                    marginBottom: "20px",
                    borderRadius: "50%",
                    width: "75px",
                    height: "75px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    color: "#fffeea",
                }}
                disabled
            >
                Approved
            </button>

            <button
                style={{
                    backgroundColor: "#a93636",
                    cursor: "default",
                    marginBottom: "20px",
                    borderRadius: "50%",
                    width: "75px",
                    height: "75px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    color: "#fffeea",
                }}
                disabled
            >
                Rejected
            </button>
        </div>
    );
};

export default ColorLegendPatient;
