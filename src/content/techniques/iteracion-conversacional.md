---
title: "Iteración conversacional"
shortName: "Iteración"
level: "intermedio"
summary: "Tratar el chat como una conversación iterativa —refinando la respuesta con ajustes sucesivos— suele dar mejores resultados que intentar escribir el prompt perfecto a la primera."
whenToUse:
  - "Tareas exploratorias donde no sabes aún qué quieres exactamente"
  - "Cuando el output está casi bien y necesita ajustes finos"
  - "Redacción que requiere varias pasadas (propuestas, emails sensibles)"
  - "Cuando descubrir el formato deseado forma parte del ejercicio"
whenNotToUse:
  - "Prompts que vas a reutilizar: mejor invertir en hacerlo bueno de entrada"
  - "Outputs que van a producción automatizada"
howTo:
  - "Empieza con un prompt razonable, no 'perfecto'. Perfecto es enemigo de útil"
  - "Evalúa cada respuesta y pide ajustes concretos: 'Más corto', 'menos jerga', 'enfoca en X'"
  - "Cuando llegues a una versión buena, pide al modelo que reconstruya el prompt que la produciría en un turno — lo guardas como plantilla"
  - "Si te pierdes, pide un resumen de lo acordado antes de seguir"
  - "Mantén conversaciones cortas: si llevas 10 turnos sin converger, replantea desde cero"
example:
  without: |
    (Un solo prompt gigante intentando anticipar todo lo que quieres)
    "Escríbeme una propuesta comercial para un cliente del sector retail, de 15 páginas, con secciones X, Y, Z, tono consultivo, pricing T&M, alcance en 3 fases…"
  with: |
    Turno 1: "Dame el outline de una propuesta comercial para un cliente de retail que quiere modernizar su logística. Nivel alto, una línea por sección."

    Turno 2 (tras evaluar): "Me gusta. Desarrolla sólo la sección 'Enfoque propuesto' en 150 palabras, tono consultivo, sin jerga técnica."

    Turno 3: "Muy pesado. Simplifica, cambia 'holístico' por algo más concreto, y añade un trade-off explícito entre velocidad y alcance."

    Turno 4: "Perfecto. Ahora genera la sección 'Plan de trabajo' con el mismo tono y longitud."
  observation: "En un solo prompt raramente obtienes el tono y la longitud exactos. Iterando convergees a algo que te guste en 3–4 turnos, y además descubres qué querías realmente."
pitfalls:
  - "No evaluar críticamente y aceptar la primera versión decente"
  - "Iterar tanto que pierdes coherencia con el objetivo original"
  - "Iterar cuando el problema era de contexto, no de ajuste fino"
relatedTechniques:
  - "auto-critica"
  - "descomposicion-tareas"
  - "meta-prompting"
tags:
  - "flujo"
  - "exploracion"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 10
---
