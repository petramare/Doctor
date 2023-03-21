export default function RegisterUser(){

    return (
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            Name:<br />
            <input type="text" name="name" value={ values.name } onChange={ handleChange } />
            <br /><br />

            Email:<br />
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
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