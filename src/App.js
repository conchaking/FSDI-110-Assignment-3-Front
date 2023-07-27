import './App.css';
import { React } from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from "./pages/catalog";
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';  
import Admin from './pages/admin';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalState from './store/globalState';
function App() {
  return (
    <GlobalState>
     <BrowserRouter>
      <div className="App">
      <NavBar/>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>

      <Footer/>
      </div>
    </BrowserRouter>
    </GlobalState>
   );
}

export default App;
