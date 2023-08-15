import React from 'react';
import Logo from './componentes/Logo.jsx';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <Logo />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>


  );
}

export default App
