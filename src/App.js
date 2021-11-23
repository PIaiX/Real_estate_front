import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/fonts.css';
import './styles/style.min.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
// import MainPage from './components/MainPage';
import { BrowserRouter } from 'react-router-dom';


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
