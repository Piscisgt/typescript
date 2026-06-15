# Modelo de datos

## Interfaces

Se ha utilizado `interface` para modelar las entidades principales del sistema:

* Estudiante
* Asignatura

Las interfaces permiten definir contratos claros para los objetos y facilitan la escalabilidad del proyecto.

## Unión Discriminada

Se ha implementado el tipo `EstadoMatricula` utilizando una unión discriminada.

Los estados posibles son:

* ACTIVA
* SUSPENDIDA
* FINALIZADA

Este patrón permite representar únicamente estados válidos y facilita el control de flujo mediante `switch`.

## Genéricos

La función `obtenerRecurso<T>()` utiliza genéricos para reutilizar la lógica de acceso a datos independientemente del tipo de recurso solicitado.

De esta forma se mantiene el tipado fuerte sin duplicar código.

## RespuestaAPI<T>

La interfaz genérica `RespuestaAPI<T>` modela una respuesta estándar de una API.

Permite reutilizar la misma estructura para distintos tipos de datos garantizando consistencia en toda la aplicación.
