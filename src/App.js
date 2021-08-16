import React from "react";
import Parrafo from "./components/Parrafo";

function App() {

  const [contador, setContador] = React.useState(0)
var numero = 0


  return (
    <div>
      <h1>HOLA MUNDO REACT</h1>
      <Parrafo />
      <h2>Esto es el contador: { contador }</h2>
      <button onClick={() => setContador(contador + 1)}> Aumentar </button>
      <button onClick={() => setContador(contador - 1)}> Disminuir </button>
      <h2>Esto es un test de variable dinamica: { numero }</h2>
      <button onClick = {() => {numero = numero + 1; console.log (numero)}}>Aumentar numero</button>
    </div>
  );
}

export default App;
