/* eslint-disable react/prop-types */
export default function Contador(props) {
  return (
    <div className="contador">
      <p className="ti">Contador</p>
      <div className="victorias">
        <p>victorias X : {props.contador1}</p>
        <p>victorias O : {props.contador2}</p>
      </div>
    </div>
  )
}
