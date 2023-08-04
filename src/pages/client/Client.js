import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";


function Client(){
    const [client, setClient] = useState([]);
    const {id} = useParams();
    const [visit, setVisit] = useState([]);
    const cookie = new Cookies();
    const [count, setCount] = useState(-1);  

    let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization' : 'Bearer ' + cookie.get('token'),
      }
    };

    useEffect(() => {
      if (count<0){
      axios
      .get('http://localhost:8080/client/'+id, config)
      .then((res) => {
        setClient(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get('http://localhost:8080/visit/client/'+id, config)
      .then((res) => {
        setVisit(res.data)
      })
      .catch((err) => {
        console.log(err);
      });}
      setCount(1);
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