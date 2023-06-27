import React from 'react';
import { Link } from 'react-router-dom';
import WithLogout from '../navbars/WithLogout';

function Visits(){
  return (
    <div>
      <WithLogout></WithLogout>
      <p>This is the Visit Page</p>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  )
}

export default Visits;