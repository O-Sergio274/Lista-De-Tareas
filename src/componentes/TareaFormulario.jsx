import React, { useState, useRef } from "react";
import "../hojas-de-estilos/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (input.trim()) {
      props.onSubmit({
        id: Date.now(),
        texto: input,
        completada: false,
      });
      setInput(""); // Limpiar el input
      inputRef.current.focus(); // Enfocar el input
    }
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        value={input}
        onChange={manejarCambio}
        ref={inputRef}
        autoFocus
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}

export default TareaFormulario;
