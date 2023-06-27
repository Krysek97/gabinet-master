import {Route, Routes} from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../style.css';
import Office from '../Office';
import Error from '../Error';
import AddC from '../client/Add';
import All from '../client/All';
import Client from '../client/Client';
import AddV from '../visit/Add';
import Login from '../security/Login';
import Registration from '../security/Registration';
import Logout from '../security/Logout';

function Sites(){


    return (
        <Routes>
          <Route path="/" element={<Office/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="clients/add" element={<AddC/>}/>
          <Route path="clients/all" element={<All/>}/>
          <Route path="client/:id" element={<Client/>}/>
          <Route path="client/:id/visits/add" element={<AddV/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Registration/>}/>
          <Route path='logout' element={<Logout/>}/>
        </Routes>
      );
    

}
  
  export default Sites;