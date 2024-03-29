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
     
     <h3>Wizyty <a href={'/client/'+id+'/visits/add'}><button class='btn btn-outline-primary'>Dodaj wizytę</button></a></h3>
     
      <div class="">
        <div class="row">
          <div class="col fw-bold fs-5">
          Data
          </div>
        </div>{visit.map((visit)=>(
        <div class="row row-cols-auto p-2">
          <div class="col p-1">
            {visit.date}
          </div>
          <div class="col">
            <a href={'/client/'+id+'/visit/'+visit.id}><button class='btn btn-outline-primary'>Podgląd wizyty</button></a>
          </div>
          <div class="col">
            <button onClick={(e) => {handleDelete(e,visit.id)}} class="btn btn-outline-danger">Usuń wizytę</button>
          </div>
        </div>))}
      </div>
    </div>
    );
  };

export default Client;