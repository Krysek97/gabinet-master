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
import PrivateRoute from '../security/privateRoute/PrivateRoute';

function Sites(){


    return (
        <Routes>
          <Route path="/" element={<PrivateRoute><Office/></PrivateRoute>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="clients/add" element={<PrivateRoute><AddC/></PrivateRoute>}/>
          <Route path="clients/all" element={<PrivateRoute><All/></PrivateRoute>}/>
          <Route path="client/:id" element={<PrivateRoute><Client/></PrivateRoute>}/>
          <Route path="client/:id/visits/add" element={<PrivateRoute><AddV/></PrivateRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Registration/>}/>
          <Route path='logout' element={<PrivateRoute><Logout/></PrivateRoute>}/>
        </Routes>
      );
    

}
  
  export default Sites;