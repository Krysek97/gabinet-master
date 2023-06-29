import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../style.css';
import LoggedAs from '../security/users/LoggedAs';

function WithLogout(){

    return (
        <div style={{display:'flex'}}>
      <div className='menuClient'>
      <Menu menuButton={<MenuButton>Klienci</MenuButton>}>
        <MenuItem href="/clients/add">Nowy klient</MenuItem>
        <MenuItem href="/clients/all">Lista klientów</MenuItem>
      </Menu>    
      <Menu menuButton={<MenuButton>Wizyty</MenuButton>}>
        <MenuItem href="/client/:id/visits/add" >Nowa wizyta</MenuItem>
      </Menu> 
      </div>    
      <a href="/"><button>Strona główna</button></a>
      <a href="/logout"><button>Wyloguj</button></a> 
      <div className='profile'>Zalogowano jako <LoggedAs/></div>
      </div>
      );
    

}
  
  export default WithLogout;