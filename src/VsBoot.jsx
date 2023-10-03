export default function VsBoot() {
  let jugadaBoot = aleatorio(1,9)
  return (
    <button className="botonDeLado">VS BOOT</button>
  )
}
function aleatorio (min,max){
  return Math.floor(Math.random()* (max-min+1)+min)
}