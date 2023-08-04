import React, {useState} from "react";
import "./../../login.css";
import axios from "axios";
import Cookies from "universal-cookie";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setSubmitted] = useState(false);
    const cookies = new Cookies();
  
  
    const errors = {
      blank: "Wymagane dane"
    };
  
    const handleSubmit = (e) => {
      //Prevent page reload
      e.preventDefault();
      
      if (username === '' || password === ''){
        setErrorMessages({name: 'blank', message: errors.blank});
      }

      const body = {
        username: username,
        password: password,
      };
      console.log(body);
      let config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      };

      axios.post("http://localhost:8080/api/authenticate", body, config)
      .then((response) => {
        console.log(response.data);
        if (response.data.token !== undefined){
          cookies.set('token', response.data.token, {maxAge:18000})
          window.location.replace('/');
        } else {
          setErrorMessages({name: response.data.error, message: response.data.message});
        }
      })
      .catch((error) =>{
        console.log(error);
      })
    };

    // Handling the name change
    const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
    };
             
    // Handling the password change
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
     };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Login </label>
            <input type="text" name="uname" 
            required onChange={(e) => {handleUsernameChange(e)}}  />
          </div>
          <div className="input-container">
            <label>Hasło </label>
            <input type="password" name="pass" 
            required onChange={(e) => {handlePasswordChange(e)}}/>
          </div>
          
          <div className="button-container">
            <input type="submit" value={"Zaloguj się"} />
          </div>
          <a href="/register">Nie masz konta? Zarejestruj się</a>
        </form>
      </div>
    );
    
  
    return (
      <div className="app">
        <div className="login-form">        
          <div className="title">Logowanie</div> 
          {isSubmitted ? <div>Użytkownik poprawnie zalogowany</div> : renderForm}
         
        </div>
        
      </div>
    );
  };
  
  export default Login;