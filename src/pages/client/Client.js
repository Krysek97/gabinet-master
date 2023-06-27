import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WithLogout from "../navbars/WithLogout";


function Client(){
    const [client, setClient] = useState([]);
    const {id} = useParams()
    useEffect(() => {
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
      fetchClient();
    });

  const [visit, setVisit] = useState([]);
    useEffect(() => {
    const fetchVisit = () => {
    axios
      .get('http://localhost:8080/visit/client/'+id)
      .then((res) => {
        setVisit(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
      fetchVisit();
    });

    const handleDelete=(e,visitId)=>{
        e.preventDefault();
      if(window.confirm('Czy na pewno chcesz usunąć wizytę?')){
        
        axios.post("http://localhost:8080/visit/" + visitId +"/delete")
        .then((response) => {
          console.log(response.data);
          window.location.replace("/client/"+id);
        })
        .catch((error) => {
          console.log(error);
        })
      }else{}
    }

    return (
     <div>
      <WithLogout></WithLogout>
     <h2>Karta klienta</h2>
     <div>{client.firstName} {client.lastName}</div>
     <div>{client.dateOfBirth}</div>
     <div>{client.phoneNumber}</div>
     
     <h3>Wizyty</h3>
     <table>
      <tr>
        <th>Data</th>
        <th>Notatka</th>
      </tr>
        {visit.map((visit)=>(
          <tr onClick={(e) => {handleDelete(e,visit.id)}}>
           <td>{visit.date}</td>
           <td>{visit.note}</td>
           <input type="submit" value="Usuń wizytę"/>
          </tr>
        ))}
     </table>
     <a href={'/client/'+id+'/visits/add'}><button>Dodaj wizytę</button></a>
     </div>
    );
  };

export default Client;