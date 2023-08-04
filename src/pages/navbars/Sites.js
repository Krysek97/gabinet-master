import {Route, Routes} from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../style.css';
import Office from '../Office';
import Error from '../Error';
import AddC from '../client/Add';
import AllC from '../client/All';
import AllU from '../security/users/All';
import AddV from '../visit/Add';
import Client from '../client/Client';
import Login from '../security/Login';
import Registration from '../security/Registration';
import Logout from '../security/Logout';
import PrivateRoute from '../security/privateRoute/PrivateRoute';
import WithLogout from './WithLogout';


function Sites(){


    return (
      <>
      <WithLogout></WithLogout>
        <Routes>
          <Route path="/" element={<PrivateRoute><Office/></PrivateRoute>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="clients/add" element={<PrivateRoute><AddC/></PrivateRoute>}/>
          <Route path="clients/all" element={<PrivateRoute><AllC/></PrivateRoute>}/>
          <Route path="client/:id" element={<PrivateRoute><Client/></PrivateRoute>}/>
          <Route path="client/:id/visits/add" element={<PrivateRoute><AddV/></PrivateRoute>}/>
          <Route path="users/all" element={<PrivateRoute><AllU/></PrivateRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Registration/>}/>
          <Route path='logout' element={<PrivateRoute><Logout/></PrivateRoute>}/>
        </Routes>
        </>
      );
    

}
  
  export default Sites;