import { generarReporte } from "./domain/types/EstadoMatricula.js"
import type { EstadoMatricula } from "./domain/types/EstadoMatricula.js"

import { obtenerRecurso } from "./services/api-client.js"

const estado: EstadoMatricula = {
  tipo: "FINALIZADA",
  notaMedia: 8.7
}

console.log(
  generarReporte(estado)
)

async function main() {

  const respuesta =
    await obtenerRecurso<string[]>(
      "/estudiantes"
    )

  console.log(respuesta)
}

main()