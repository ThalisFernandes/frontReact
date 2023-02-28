import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main/main';
import ComponentsBar from './componentes/barComponents/componentsBar';
import { Route } from 'react-router-dom';
import Rotas from './routes';
function App() {
  return (
    <div className="App">
      <ComponentsBar />
      <Rotas />
    </div>
  );
}

export default App;
