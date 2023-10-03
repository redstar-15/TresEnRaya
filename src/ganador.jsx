export default function ganador(cuadrados) {
  const linea = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  for (let i = 0; i < linea.length; i++) {
    const [a, b, c] = linea[i];
    if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
      return cuadrados[a];
    }
  }
  return null;
}