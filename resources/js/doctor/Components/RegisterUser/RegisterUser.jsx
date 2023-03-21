import UserContext from "./UserContext";
import React, { useState, useEffect, useContext } from 'react';



export default function RegisterUser(){

    const { getUserInformation } = useContext(UserContext);
    const [values, setValues] = useState({
        
        first_name: '',
        surname: '',
        name: '',
        email: '',
        date_of_birth:'',
        id_number: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

    const handleChange = (event) => {
        setValues(previous_values => {         //values before update
            return ({...previous_values,        //values to be updated
                [event.target.name]: event.target.value
            });
        });
    }


    return (
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            First name:<br />
            <input type="text" name="first_name" value={ values.first_name } onChange={ handleChange } />
            <br /><br />

            SurName:<br />
            <input type="text" name="surname" value={ values.surname } onChange={ handleChange } />
            <br /><br />

            Name:<br />
            <input type="text" name="name" value={ values.name } onChange={ handleChange } />
            <br /><br />

            Email:<br />
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
            <br /><br />

            Date of birth:<br />
            <input type="string" name="date_of_birth" value={ values.date_of_birth } onChange={ handleChange } />
            <br /><br />
            
            Id number:<br />
            <input type="number" name="id_number" value={ values.id_number } onChange={ handleChange } />
            <br /><br />

            Password:<br />
            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
            <br /><br />

            Confirm password:<br />
            <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />
            <br /><br />

            <button>Register</button>

        </form>
    );
}
};