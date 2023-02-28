import React, {useState} from "react";
import "./../../login.css";

function Login(){

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "Błędny login",
      pass: "Błędne hasło"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
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
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Hasło </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          
          <div className="button-container">
            <input type="submit" value={"Zaloguj się"}/>
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