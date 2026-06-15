import type { Asignatura } from "./Asignatura.js"

export interface MatriculaActiva {
  tipo: "ACTIVA"
  asignaturas: Asignatura[]
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA"
  motivo: string
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA"
  notaMedia: number
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada

export function generarReporte(
  estado: EstadoMatricula
): string {

  switch (estado.tipo) {

    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`

    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`

    case "FINALIZADA":
      return `Matrícula finalizada. Nota media: ${estado.notaMedia}`

    default:
      return "Estado desconocido"
  }
}