import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";


function Client(){
    const {clientId} = useParams();
    const {visitId} = useParams();
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
      .get('http://localhost:8080/visit/'+ visitId, config)
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
          window.location.replace("/client/"+clientId);
        })
        .catch((error) => {
          console.log(error);
        })
      }else{}
    }

    return (
     <div>
     <h3>Szczegóły wizyty </h3>
     <div class="">
        <div class="row row-cols-auto">
          <div class="col fw-bold fs-5">
            Data
          </div>
          <div class="col p-1">
            {visit.date}
          </div>
        </div>
        <div class="row row-cols-auto">
        <div class="col fw-bold fs-5">
            Notatka
          </div>
          <div class="col p-1">
            {visit.note}
          </div>
        </div>
      <div class='row row-cols-auto '>
        <div class="col p-2">
          <button onClick={(e) => {handleDelete(e,visit.id)}} class="btn btn-outline-danger">Usuń wizytę</button>
        </div>
        <div class="col p-2">
          <a href={'/client/'+clientId}><button class='btn btn-outline-primary'>Powrót do karty klienta</button></a>
        </div>
      </div>
      </div>
     </div>
    );
  };

export default Client;