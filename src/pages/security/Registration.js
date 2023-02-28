import { useState } from 'react';
import "./../../login.css";

function Registration() {
     
      // States for registration
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
     
      // States for checking the errors
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState(false);
     
      // Handling the name change
      const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };
     
      // Showing success message
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
          </div>
        );
      };
     
      // Showing error message if error is true
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };
     
      return (
        <div className="app">
         <div className='login-form'>
          <div className='title'>
            <div>Rejestracja</div>
          </div>
     
          {/* Calling to the methods */}
          <div className="error">
            {errorMessage()}
            {successMessage()}
          </div>
          <form onSubmit = {handleSubmit} className="input-container">
            {/* Labels and inputs for form data */}
            <label className="uname">Login</label>
            <input onChange={handleName}
              value={name} type="text" />
     
            <label className="pass">Hasło</label>
            <input onChange={handlePassword}
              value={password} type="password" />
          
          <div className="button-container">
            <input type="submit" value={"Zarejestruj się"}/>
          </div>
            <a href="/login">Masz już konto? Zaloguj się</a>
            
          </form>
          </div>
        </div>
      );
    }

    export default Registration;