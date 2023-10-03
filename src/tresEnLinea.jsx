/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Cuadrado from "./Cuadrado"
import ganador from "./ganador"
import Contador from "./contador"
import VsBoot from "./VsBoot";


export default function TresEnLinea() {
  const [xsiguiente, setXsiguiente] = useState(true);
  const [cuadrados, setCuadrados] = useState(Array(9).fill(null));
  const [contador1, setcontador1] = useState(0)
  const [contador2, setcontador2] = useState(0)

  function handleClick(i) {
    if (cuadrados[i] || ganador(cuadrados)) {
      return;
    }
    const siguienteCuadrado = cuadrados.slice();
    if (xsiguiente) {
      siguienteCuadrado[i] = "X";
    } else {
      siguienteCuadrado[i] = "O";
    }
    setCuadrados(siguienteCuadrado);
    setXsiguiente(!xsiguiente);
  }
  const winner = ganador(cuadrados);
  let status;
  if (winner) {
    status = "ganador: " + winner;
  } else {
    status = "siguiente jugador: " + (xsiguiente ? "X" : "O");
  }

  useEffect(() => {
    let victoria = ganador(cuadrados)
    if (victoria == "X") {
      setcontador1(c => c + 1)
    } else if (victoria == "O") {
      setcontador2((c) => { return c + 1 })
    }
  }, [cuadrados])

  function Reiniciar() {
    function reinicio() {
      setCuadrados((Array(9).fill(null)))
    }
    return (
      <button className="botonDeLado" onClick={reinicio}>reiniciar</button>
    )
  }


  return (
    <>
      <div className="titulo">
        <h1>TRES EN LINEA</h1>
      </div>
      <Contador contador1={contador1} contador2={contador2}></Contador>
      <div className="status">{status}</div>
      <div className="tabla-fila">
        <Cuadrado value={cuadrados[0]} onSquareClick={() => handleClick(0)} />
        <Cuadrado value={cuadrados[1]} onSquareClick={() => handleClick(1)} />
        <Cuadrado value={cuadrados[2]} onSquareClick={() => handleClick(2)} />
        <Reiniciar></Reiniciar>
      </div>
      <div className="tabla-fila">
        <Cuadrado value={cuadrados[3]} onSquareClick={() => handleClick(3)} />
        <Cuadrado value={cuadrados[4]} onSquareClick={() => handleClick(4)} />
        <Cuadrado value={cuadrados[5]} onSquareClick={() => handleClick(5)} />
        <VsBoot></VsBoot>
      </div>
      <div className="tabla-fila">
        <Cuadrado value={cuadrados[6]} onSquareClick={() => handleClick(6)} />
        <Cuadrado value={cuadrados[7]} onSquareClick={() => handleClick(7)} />
        <Cuadrado value={cuadrados[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )
}
