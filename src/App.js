import React from 'react';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import './styles/style.min.css';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { Footer } from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
      <Footer />
    </HashRouter>
  );
}

export default App;
