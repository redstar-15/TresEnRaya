/* eslint-disable react/prop-types */
export default function Cuadrado({ value, onSquareClick }) {
  return (
    <button className="cuadrado" onClick={onSquareClick}>
      {value}
    </button>
  );
}