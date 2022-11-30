import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css' 

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import CursosPage from './pages/CursosPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ProductosPage from './pages/ProductosPage';


function App() {
  return (
          
          <div>
              <Header />
              <BrowserRouter>
                <Nav />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="nosotros" element={<NosotrosPage />} />
                  <Route path="cursos" element={<CursosPage />} />
                  <Route path="productos" element={<ProductosPage />} />
                  <Route path="novedades" element={<NovedadesPage />} />
                  <Route path="contacto" element={<ContactoPage />} />
                </Routes>
              </BrowserRouter>
              <Footer/>
            </div>);

}
export default App;