import { useState } from 'react';

export default function EditInfo() {

    const handleChange = (e) => {
        //LOGIC
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //LOGIC
    };

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
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    // value={user.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    // value={user.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    // value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    // value={user.date_of_birth}
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
