import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menu } from './componentes/Menu';
import { Home } from './componentes/Home';
import { ABC } from './componentes/ABC';
import { BF } from './componentes/BF';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/App' element={<App/>}/>
          <Route path='/ABC' element={<ABC/>}/>
          <Route path='/BF' element={<BF/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
