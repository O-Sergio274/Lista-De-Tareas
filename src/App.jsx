import './App.css';
import logosmo from './imagenes/logo_whatsap_250px_.webp';
import React, { Suspense, lazy } from 'react';

// Carga diferida del componente
const ListaDeTareas = lazy(() => import('./componentes/ListaDeTareas'));


function AppTareas() {
  return (
    <div className='App-tareas'>
      <div className='logo-contenedor'>
        <img className='logo' src={logosmo} alt='logo S.M.O' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Suspense fallback={<div>Cargando tareas...</div>}>
          <ListaDeTareas />
        </Suspense>
      </div>
    </div>
  );
}

export default AppTareas;
