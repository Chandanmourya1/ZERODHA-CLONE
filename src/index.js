import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import HomaPage from './landing_pages/home/HomePage';
import Signup from './landing_pages/signup/Signup';
// import About from './landing_pages/about/AboutPage';
import AboutPage from './landing_pages/about/AboutPage';
import ProductPage from './landing_pages/products/ProductPage'
import PricingPage from './landing_pages/pricing/PricingPage';
import SupportPage from './landing_pages/supports/SupportPage';
import Navbar from './landing_pages/Navbar';
import Footer from './landing_pages/Footer';
import NotFound from './landing_pages/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomaPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
);


