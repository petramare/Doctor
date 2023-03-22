import { useContext, useState } from 'react';

export default function EditInfo() {

   // const { user } = useContext{UserContext}
   const handleChange = (e) => {
    setMission(previous_values => {
        return ({...previous_values,
            [e.target.name]: e.target.value
        });
    });
}

    const handleSubmit = (e) => {
        e.preventDefault();
        //LOGIC
    };

    const handleDoctorChange = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Edit your information</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                              
                            <div className="form-group">
                                <label htmlFor="visiting_hours">Visiting hours</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="visiting_hours"
                                    name="visiting_hours"
                                    // value={user.email}
                                    onChange={handleChange}
                                />
                            </div>


                            <button type="submit" className="btn">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
