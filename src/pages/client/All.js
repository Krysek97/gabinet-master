import React, {useState, useEffect} from 'react';
import axios from 'axios';

function All(){
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetchClients();
  }, []);
  const fetchClients = () => {
    axios
      .get('http://localhost:8080/client/all')
      .then((res) => {
        //console.log(res);
        setClients(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
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