import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/fonts.css';
import './styles/style.min.css';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
// import MainPage from './components/MainPage';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
