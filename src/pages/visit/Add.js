import WithLogout from '../navbars/WithLogout';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";import Cookies from 'universal-cookie';
;


function Add(){
  const [date , setDate] = useState('');
  const [note , setNote] = useState('');
  const cookie = new Cookies;

  const [client, setClient] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      fetchClient();
    });
  const fetchClient = () => {
    axios
      .get('http://localhost:8080/client/'+id)
      .then((res) => {
        setClient(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

  const handleDateChange =(e)=>{
    setDate(e.target.value);
  }
  const handleNoteChange =(e)=>{
    setNote(e.target.value);
  }

  const handleSubmit=(e)=>{
    alert('Dodano wizytę');
      e.preventDefault();
      const body = {
        date: date,
        note: note,
        clientId: client.id,
      };
      console.log(body);
      let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Authorization' : 'Bearer ' + cookie.get('token'),
        }
      };
      
      axios.post("http://localhost:8080/visit/add", body, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

return (
  <form onSubmit={(e) => {handleSubmit(e)}}>
  <WithLogout></WithLogout>
  <h2> Nowa wizyta </h2>
    <label>
        Klient:
      </label><br/>
      <div>{client.firstName} {client.lastName}</div>
      <label >
        Data:
      </label><br/>
      <input name='date' type="date" value={date} required onChange={(e) => {handleDateChange(e)}} /><br/>
      <label >
        Notatka:
      </label><br/>
      <input name='note' type="text" value={note} required onChange={(e) => {handleNoteChange(e)}} /><br/>
      <input type="submit" value="Potwierdź"/>
    </form>
);
}       

export default Add;