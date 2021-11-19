import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/fonts.css';
import './styles/style.min.css';
import Header from './components/Header';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <footer></footer>
    </div>
  );
}

export default App;
