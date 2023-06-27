import React from 'react';
import WithLogout from './navbars/WithLogout';
import Cookies from 'universal-cookie';
import axios from 'axios';

function Office(){
  
  const cookie = new Cookies;

  let config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization' : 'Bearer ' + cookie.get('token'),
    }
  };

  axios.get(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  })

  return (
    <div>
      <WithLogout></WithLogout>
      <p>This is the Home Page</p>
    </div>
  )
}

export default Office;