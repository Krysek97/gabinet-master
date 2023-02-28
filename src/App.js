import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './style.css';
import Office from './pages/Office';
import Error from './pages/Error';
import AddC from './pages/client/Add';
import All from './pages/client/All';
import Client from './pages/client/Client';
import AddV from './pages/visit/Add';
import Login from './pages/security/Login';
import Registration from './pages/security/Registration';

function App() {
    return (
      <BrowserRouter>
      <div>Gabinet</div>
      <div style={{display:'flex'}}>
    <Menu menuButton={<MenuButton>Klienci</MenuButton>}>
      <MenuItem href="/clients/add">Nowy klient</MenuItem>
      <MenuItem href="/clients/all">Lista klientów</MenuItem>
    </Menu>    
    <Menu menuButton={<MenuButton>Wizyty</MenuButton>}>
      <MenuItem href="/client/:id/visits/add" >Nowa wizyta</MenuItem>
    </Menu>    
    <a href="/"><button>Strona główna</button></a>
    <a href="/login"><button>Zaloguj</button></a>
    <a href="/register"><button>Zarejestruj</button></a>
    </div>
      <Routes>
        <Route path="/" element={<Office/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="clients/add" element={<AddC/>}/>
        <Route path="clients/all" element={<All/>}/>
        <Route path="client/:id" element={<Client/>}/>
        <Route path="client/:id/visits/add" element={<AddV/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;