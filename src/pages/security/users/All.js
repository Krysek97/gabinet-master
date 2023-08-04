import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

function All(){
  const [users, setUsers] = useState([]);
  const cookie = new Cookies;

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization' : 'Bearer ' + cookie.get('token'),
      }
    };
    axios
      .get('http://localhost:8080/user/all', config)
      .then((res) => {
        //console.log(res);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
      <h1>Wszyscy użytkownicy</h1>
      <div className='user-container'>
        {users.map((user)=>(
          <div className='userList'>
            <div>{user.id}. {user.username} {user.role} </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default All;