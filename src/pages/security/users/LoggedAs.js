import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

function LoggedAs(){
    const [user, setUser] = useState([]);
    const cookie = new Cookies;


  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    const body = {
        token:cookie.get('token')
      };
    let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization' : 'Bearer ' + cookie.get('token'),
      }
    };
    axios
      .post('http://localhost:8080/user/logged', body, config)
      .then((res) => {
        console.log(res);
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
    return (
        <div> &nbsp; {user.username} {user.role}</div>
      );

}

export default LoggedAs;