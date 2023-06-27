import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../style.css';

function LoginRegister(){

    return (
        <div style={{display:'flex'}}>
      <a href="/"><button>Strona główna</button></a>
      <a href="/login"><button>Zaloguj</button></a>
      <a href="/register"><button>Zarejestruj</button></a>
      </div>
      );
    

}
  
  export default LoginRegister;