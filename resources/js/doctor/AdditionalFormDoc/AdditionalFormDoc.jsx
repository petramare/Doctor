
import React, { useState, useEffect, useContext } from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/navbar/Navbar';



export default function AdditionalFormDoc(){

    const [values, setValues] = useState({
        
        specialization: '',
        doctor_license_number: ''
       
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/register/{user_id}', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
    }

    const handleChange = (event) => {
        setValues(previous_values => {         //values before update
            return ({...previous_values,        //values to be updated
                [event.target.name]: event.target.value
            });
        });
    }


    return (

        <div>
            <Navbar />

            <h2>Please fill-in additional information about your specialization</h2>
            <br />
            <form action="/register/{user_id}" method="post" onSubmit={ handleSubmit }>
    
                Specialization:<br />
                <input type="text" name="specialization" value={ values.specialization } onChange={ handleChange } />
                <br /><br />
    
                Doctor license number:<br />
                <input type="number" name="doctor_license_number" value={ values.doctor_license_number } onChange={ handleChange } />
                <br /><br />
    
                <button>Continue</button>
    
            </form>

            <Footer />
        </div>
    );

};