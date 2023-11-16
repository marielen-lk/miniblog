import logo from './logo.svg';
import './App.css';

//Navigate(navegação) usar para redirecionar os usuários
//logados para uma página e não logados para outra.

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './firebase/pages/Home/Home.js';
import About from './firebase/pages/About/About.js';
import Navbar from './componentes/Navbar.js';
import Footer from './componentes/Footer.js';
import Login from './firebase/pages/Login/Login.js';
import Register from './firebase/pages/Register/Register.js';

import { AuthProviderFac } from './context/AuthContextFaculdade';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import {useAutenticacao} from './hooks/useAutenticacao';

import HowItWorks from './firebase/pages/HowItWorks/HowItWorks.js';
import Dashboard from  './firebase/pages/Simulador/Simulador.js';
import Contact from './firebase/pages/Contact/Contact.js'

import CookieBanner from './componentes/Cookies.js';
import Simulador from './firebase/pages/Simulador/Simulador.js';

import MidiaSocial from './componentes/MidiaSocial';
import Portifolio from './firebase/pages/Portifolio/Portifolio.js';


function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAutenticacao()

  useEffect(() => {
    onAuthStateChanged (auth, (user) =>{
      setUser(user)
    })
  }, [auth])

  const loadingUser = user === undefined
  if (loadingUser) {
    return <p>Carregando...</p>
  }
  
  return (
    <div className="App">
        
        <AuthProviderFac value={{user}}>
        <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/login' element={ !user ? <Login/> : <Navigate to="/" />} />
              <Route path='/register' element={!user ? <Register/> : <Navigate to="/register" /> } />
              <Route path='/simulacao' element={ <Simulador/> }/>
              <Route path='/how' element={ <HowItWorks/> } />
              <Route path="/portifolio" element={user ? <Portifolio /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <MidiaSocial />
          <Footer />
        </BrowserRouter>
        </AuthProviderFac>
        <CookieBanner />
    </div>
  );
}

export default App;
