import React, { useState } from 'react';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';
import TareaFormulario from '../componentes/TareaFormulario';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = tarea => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id == id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

    return(
      // Poner en caso de no quere un div (componente principal)
        <>
        <TareaFormulario  onSubmit={agregarTarea} />
        <div className='tarea-lista-contenedor'>
          {
            tareas.map((tarea)=>
              <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
                />
            )
          };
        </div>
        </>
    );
}

export default ListaDeTareas;