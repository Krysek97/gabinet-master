// import React from 'react';
// import { UseCountdown } from './useCountdown';
// import Cookies from 'universal-cookie';

// const CountdownTimer = ({ targetDate }) => {
//     const [hours, minutes, seconds] = UseCountdown(targetDate);
//     const cookie = new Cookies();
  
//     if (hours + minutes + seconds <= 0) {
//      return ( 
//         cookie.remove('token'),
//         window.location.replace('/login')
//         );
//     } else {
//       return (
//         <ShowCounter
//           hours={hours}
//           minutes={minutes}
//           seconds={seconds}
//         />
//       );
//     }
//   };
