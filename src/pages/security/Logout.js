import Cookies from "universal-cookie";

function Logout(){

    const cookie = new Cookies;

    return (
      cookie.remove('token'),
      window.location.replace('/login')
    );
    

}
  
  export default Logout;