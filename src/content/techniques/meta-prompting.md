---
title: "Meta-prompting: usar el modelo para mejorar tus prompts"
shortName: "Meta-prompting"
level: "avanzado"
summary: "Pedirle al modelo que critique o reescriba tus propios prompts es una de las formas más rentables de subir el nivel de toda tu biblioteca de prompts — especialmente cuando no sabes por dónde empezar."
whenToUse:
  - "Cuando un prompt tuyo no funciona y no identificas por qué"
  - "Antes de añadir un prompt a la biblioteca compartida"
  - "Cuando quieres transferir un buen prompt a otro dominio"
  - "Para aprender — la crítica del modelo suele enseñar patrones que no conocías"
whenNotToUse:
  - "Prompts triviales donde el esfuerzo no se amortiza"
  - "Cuando el problema real es el contexto o los datos, no el prompt"
howTo:
  - "Pega tu prompt y pide: 'Critica este prompt. ¿Qué le falta? ¿Qué podría mejorar?'"
  - "Da criterios: '¿La tarea está clara? ¿El formato está especificado? ¿Hay restricciones suficientes? ¿Hay ambigüedades?'"
  - "Pide una versión reescrita aplicando las críticas"
  - "Compara las dos versiones en un caso real y quédate con lo que mejor funciona"
  - "Para prompts que vas a compartir, itera 2–3 veces: crítica → reescritura → prueba"
example:
  without: |
    (Mantienes tu prompt original y esperas que funcione mejor con el tiempo)
    "Escríbeme un email de seguimiento para el cliente con lo que hablamos ayer."
  with: |
    Tengo este prompt que uso para redactar emails de seguimiento:

    ---
    "Escríbeme un email de seguimiento para el cliente con lo que hablamos ayer."
    ---

    Critícalo contra los siguientes criterios:
    - ¿El rol del modelo está definido?
    - ¿El contexto es suficiente? ¿Qué falta que el modelo necesitaría saber?
    - ¿La tarea es inequívoca?
    - ¿El formato y la longitud están especificados?
    - ¿Hay restricciones (tono, qué no hacer, anonimización)?

    Después de criticar, propón una versión reescrita del prompt, y explica brevemente qué cambios has hecho y por qué.
  observation: "La crítica saca a la luz todo lo que el prompt daba por supuesto: el rol, el tono, la longitud, qué información debería incluir el usuario. La versión reescrita es notablemente mejor y además te sirve como plantilla reutilizable. Coste: un turno; retorno: una plantilla permanente."
pitfalls:
  - "Aceptar la reescritura del modelo sin probarla en un caso real"
  - "Iterar ad infinitum sin declarar 'suficientemente bueno' en algún punto"
  - "Pedir crítica sin criterios, lo que produce sugerencias vagas"
relatedTechniques:
  - "auto-critica"
  - "iteracion-conversacional"
tags:
  - "mejora"
  - "plantillas"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 15
---
