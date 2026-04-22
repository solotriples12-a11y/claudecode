---
title: "Self-consistency: agregar varias respuestas"
shortName: "Self-consistency"
level: "avanzado"
summary: "Ejecutar el mismo prompt varias veces y quedarse con la respuesta dominante reduce la varianza en tareas donde el modelo puede razonar por caminos distintos. Útil para análisis críticos con alta incertidumbre."
whenToUse:
  - "Análisis críticos donde un error cuesta caro"
  - "Problemas donde sabes que el modelo da respuestas variables"
  - "Validación de conclusiones antes de entregar"
  - "Clasificaciones ambiguas que requieren voto mayoritario"
whenNotToUse:
  - "Tareas creativas donde la variedad es el objetivo"
  - "Cuando el coste de múltiples ejecuciones no se justifica"
  - "Prompts muy deterministas, donde la respuesta es siempre la misma"
howTo:
  - "Ejecuta el mismo prompt 3–5 veces (idealmente con algo de aleatoriedad: temperature > 0)"
  - "Compara las respuestas: ¿coinciden en la conclusión aunque el razonamiento sea distinto?"
  - "Si hay consenso (≥60% de acuerdo), tienes más confianza en la respuesta"
  - "Si no hay consenso, analiza las discrepancias — suele revelar ambigüedad en el prompt o en los datos"
  - "Como atajo, puedes pedir al modelo en un solo turno: 'Genera 3 análisis independientes y luego compara sus conclusiones'"
example:
  without: "¿Este cliente está en riesgo de churn según este historial?"
  with: |
    Voy a pedirte el mismo análisis tres veces, desde ángulos ligeramente distintos. Al final compararás las tres conclusiones.

    Análisis 1 (énfasis en comportamiento reciente):
    "Basándote en la actividad de los últimos 3 meses, ¿este cliente está en riesgo de churn? Razona y da una probabilidad alta/media/baja."

    Análisis 2 (énfasis en tendencia histórica):
    "Basándote en la evolución de los últimos 12 meses, ¿este cliente está en riesgo de churn? Razona y da una probabilidad alta/media/baja."

    Análisis 3 (énfasis comparativo):
    "Comparado con clientes similares en cartera, ¿este cliente está en riesgo de churn? Razona y da una probabilidad alta/media/baja."

    Síntesis final:
    "Compara los tres análisis anteriores. Si coinciden, consolida. Si divergen, explica por qué y cuál es más fiable."

    Historial del cliente:
    <<<
    [PEGA AQUÍ EL HISTORIAL]
    >>>
  observation: "Una sola ejecución puede dar un 'riesgo medio' poco útil. Tres análisis desde ángulos distintos convergen (o no): si los tres coinciden en 'alto', la conclusión es robusta. Si divergen, el desacuerdo ya es información valiosa."
pitfalls:
  - "Hacer las ejecuciones idénticas sin variar nada: obtienes la misma respuesta tres veces"
  - "Agregar por mayoría simple cuando un razonamiento es claramente mejor que los otros"
  - "Ignorar los casos de desacuerdo, que suelen revelar problemas del prompt o los datos"
relatedTechniques:
  - "tree-of-thoughts"
  - "chain-of-thought"
  - "auto-critica"
references:
  - title: "Self-Consistency Improves CoT (Wang et al., 2022)"
    url: "https://arxiv.org/abs/2203.11171"
tags:
  - "razonamiento"
  - "robustez"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 13
---
