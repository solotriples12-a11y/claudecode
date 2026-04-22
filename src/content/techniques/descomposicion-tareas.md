---
title: "Descomposición de tareas y prompt chaining"
shortName: "Descomposición"
level: "intermedio"
summary: "Dividir un problema complejo en subtareas secuenciales, donde cada output alimenta al siguiente prompt, produce resultados mejores y más auditables que un solo prompt gigante."
whenToUse:
  - "Entregables de varios pasos (research → síntesis → propuesta)"
  - "Tareas donde cada paso requiere criterio distinto"
  - "Cuando el output de un solo prompt sería demasiado largo"
  - "Cuando quieres revisar resultados intermedios antes de seguir"
whenNotToUse:
  - "Tareas atómicas que no se benefician de división"
  - "Cuando la coherencia global es más importante que la precisión por paso"
howTo:
  - "Lista las subtareas en orden lógico antes de empezar"
  - "Haz un prompt por subtarea, con su propio rol/contexto/restricciones"
  - "El output de cada paso va como input del siguiente (pegado explícito)"
  - "Revisa cada paso antes de avanzar: errores tempranos se propagan"
  - "Para flujos que repetirás, documenta la cadena completa"
example:
  without: "Haz un análisis competitivo de los 3 principales competidores en nuestro sector y dame recomendaciones."
  with: |
    Paso 1 — Identificación:
    "Dame los 3 competidores más relevantes en [sector], para una empresa [tipo/tamaño]. Para cada uno: nombre, posicionamiento en una frase, público objetivo."

    Paso 2 — Análisis (con el output del paso 1):
    "Para cada uno de estos competidores: [pegar output paso 1], analiza su propuesta de valor, precios públicos si se conocen, puntos fuertes y puntos débiles."

    Paso 3 — Comparativa:
    "Resume los tres análisis [pegar output paso 2] en una tabla comparativa con 5 dimensiones: precio, foco de cliente, madurez de producto, presencia, velocidad de innovación."

    Paso 4 — Recomendaciones:
    "A partir de la tabla comparativa [pegar output paso 3] y de nuestra posición actual (vendemos X, enfoque Y), dame 3 recomendaciones estratégicas con justificación basada en huecos competitivos."
  observation: "En un solo prompt obtienes un análisis superficial donde los tres competidores se funden y las recomendaciones son genéricas. En cadena, cada paso es más profundo y auditable — puedes corregir el paso 1 antes de que contamine los siguientes."
pitfalls:
  - "No pegar literalmente el output entre pasos, pidiendo al modelo que 'lo recuerde'"
  - "Cadenas demasiado largas donde los errores iniciales se amplifican"
  - "Subtareas mal definidas donde los pasos se solapan y el trabajo se duplica"
relatedTechniques:
  - "chain-of-thought"
  - "iteracion-conversacional"
tags:
  - "razonamiento"
  - "flujo"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 8
---
