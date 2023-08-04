import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './style.css';
import Sites from './pages/navbars/Sites';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
      <div>Gabinet
      <BrowserRouter>
        <Sites></Sites>
      </BrowserRouter>
      </div>
    );
}

export default App;