import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import WithLogout from '../navbars/WithLogout';

function All(){

  const cookie = new Cookies;
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetchClients();
  });
  const fetchClients = () => {
    let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization' : 'Bearer ' + cookie.get('token'),
      }
    };
    axios
      .get('http://localhost:8080/client/all', config)
      .then((res) => {
        //console.log(res);
        setClients(res.data)
      })
      .catch((err) => {
        console.log(err);
        console.log(config);
      });
    }
  return (
    <div>
      <WithLogout></WithLogout>
      <h1>Wszyscy klienci</h1>
      <div className='client-container'>
        {clients.map((client)=>(
          <div className='card'>
            <div>{client.id}. {client.firstName} {client.lastName} {client.dateOfBirth} <a href={'/client/'+client.id}><button>Przejdź do klienta</button></a></div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default All;