import React from 'react';
import { Link } from 'react-router-dom';

function Visits(){
  return (
    <div>
      <p>This is the Visit Page</p>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  )
}

export default Visits;