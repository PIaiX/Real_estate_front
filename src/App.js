import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/fonts.css';
import './styles/style.min.css';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { Footer } from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
