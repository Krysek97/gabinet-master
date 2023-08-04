import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import WithLogout from '../navbars/WithLogout';
import { Form } from 'react-bootstrap';

function Add(){
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [dateOfBirth , setDateOfBirth] = useState('');
  const cookie = new Cookies;

  const handleFirstNameChange =(e)=>{
    setFirstName(e.target.value);
  }
  const handleLastNameChange =(e)=>{
    setLastName(e.target.value);
  }
  const handlePhoneNumberChange =(e)=>{
    setPhoneNumber(e.target.value);
  }
  const handleDateOfBirthChange =(e)=>{
    setDateOfBirth(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      alert('Dodano klienta:"' + firstName + " " + lastName + '"');
      const body = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
      };
      console.log(body);
      let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Authorization' : 'Bearer ' + cookie.get('token'),
        }
      };
      
      axios.post("http://localhost:8080/client/add", body, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

return (
  <Form method='POST' onSubmit={(e) => {handleSubmit(e)}}>
  <h2> Nowy klient </h2>
      <label >
        Imię:
      </label><br/>
      <input name='firstName' type="text" value={firstName} required onChange={(e) => {handleFirstNameChange(e)}} /><br/>
      <label >
        Nazwisko:
      </label><br/>
      <input name='lastName' type="text" value={lastName} required onChange={(e) => {handleLastNameChange(e)}} /><br/>
      <label>
        Numer telefonu:
      </label><br/>
      <input name='phoneNumber' type="number" value={phoneNumber} required onChange={(e) => {handlePhoneNumberChange(e)}} /><br/>
      <label>
        Data urodzenia:
      </label><br/>
      <input name='dateOfBirth' type="date" value={dateOfBirth} required onChange={(e) => {handleDateOfBirthChange(e)}} /><br/>
      <input type="submit" value="Potwierdź"/>
    </Form>
);
}       

export default Add;