---
title: "Estructura del prompt: rol, contexto, tarea, formato, restricciones"
shortName: "Estructura del prompt"
level: "basico"
summary: "Un prompt bien construido nombra el rol del modelo, da contexto, define la tarea, especifica el formato de salida y enumera restricciones. Es la base sin la cual el resto importa menos."
whenToUse:
  - "Cualquier prompt que vayas a reutilizar o compartir"
  - "Cuando el output tiene requisitos concretos de forma o tono"
  - "Siempre que notes respuestas genéricas o fuera de foco"
whenNotToUse:
  - "Conversaciones exploratorias muy breves, donde imponer estructura ralentiza"
  - "Preguntas factuales simples donde el contexto no aporta"
howTo:
  - "Empieza con el rol: 'Eres un consultor senior especializado en…'"
  - "Añade contexto: qué problema resuelves, para qué audiencia, con qué restricciones del mundo real"
  - "Declara la tarea en imperativo y en una sola frase"
  - "Especifica formato: estructura, longitud, idioma, tono"
  - "Cierra con restricciones explícitas: qué NO hacer, qué validar"
example:
  without: "Escríbeme un resumen de este informe."
  with: |
    Eres un consultor senior que prepara un brief ejecutivo para un comité de dirección.
    Tu tarea es resumir el informe adjunto en un brief accionable.

    Formato:
    - Máximo 200 palabras
    - Tres secciones: "Qué dice", "Qué implica para nosotros", "Qué decidir"
    - Tono neutro y profesional, sin adjetivos valorativos

    Restricciones:
    - No incluyas datos que no estén en el informe
    - Si algo es ambiguo, márcalo como pendiente de validar

    Informe:
    <<<
    [PEGA AQUÍ EL INFORME]
    >>>
  observation: "Sin estructura el modelo entrega un resumen genérico que hay que reescribir. Con estructura el output ya sirve para el comité — sólo hay que revisar las cifras."
pitfalls:
  - "Dar contexto excesivo que el modelo no va a usar, en lugar del relevante"
  - "Olvidar el formato de salida: respuestas que parecen buenas pero no encajan en el deliverable"
  - "Confundir restricciones con rol ('no seas aburrido' no es una restricción accionable)"
relatedTechniques:
  - "asignacion-de-rol"
  - "formato-de-salida"
  - "restricciones-negative-prompting"
references:
  - title: "Prompt Engineering Guide — Elements of a Prompt"
    url: "https://www.promptingguide.ai/introduction/elements"
tags:
  - "fundamentos"
  - "estructura"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 1
---

La estructura no garantiza calidad, pero ningún prompt de calidad carece de estructura. Cuando notas que los outputs son genéricos, lo más rentable es revisar si falta alguno de los cinco bloques: rol, contexto, tarea, formato, restricciones.
