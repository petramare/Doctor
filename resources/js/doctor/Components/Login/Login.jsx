import React, { useState } from 'react';

export default function LoginPage() {


    const { getUserInformation } = useContext(UserContext);
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    //AJAX REQUEST
    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        //PARSE AS JSON
        const response_data = await response.json();

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }
        getUserInformation();
    };

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1>Login Page</h1>
                <form action='/login' method='post' onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input type="email" name='email' value={values.email} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name='password' value={values.password} onChange={handleChange} />
                    </label>
                    <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}
