import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../style.css';

function Navbar(){

    return (
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
      <a href="/logout"><button>Wyloguj</button></a>
      </div>
      );
    

}
  
  export default Navbar;