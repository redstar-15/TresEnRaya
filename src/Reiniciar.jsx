import { setCuadrados } from "./tresEnLinea"
export default function Reiniciar() {
  function reinicio() {
    setCuadrados((Array(9).fill(null)))
  }
  return (
    <button className="botonReini" onClick={reinicio}>reiniciar</button>
  )
}