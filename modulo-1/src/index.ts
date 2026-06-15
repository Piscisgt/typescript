import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils.js"

const datos: number[] = [10, 12, 15, 18, 100]

console.log("Datos:", datos)

console.log(
  "Media:",
  calcularMedia(datos)
)

console.log(
  "Mediana:",
  calcularMediana(datos)
)

console.log(
  "Sin atípicos:",
  filtrarAtipicos(datos, 50)
)