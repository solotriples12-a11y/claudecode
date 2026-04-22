---
title: "Chain-of-Thought: razonar paso a paso"
shortName: "Chain-of-Thought"
level: "intermedio"
summary: "Pedir al modelo que muestre su razonamiento antes de la respuesta final mejora la precisión en tareas analíticas y hace que el output sea defendible ante el cliente."
whenToUse:
  - "Análisis con varios pasos lógicos"
  - "Decisiones que dependen de comparar opciones"
  - "Diagnóstico de causas raíz"
  - "Cualquier tarea donde el porqué importa tanto como el qué"
whenNotToUse:
  - "Tareas creativas o de generación libre"
  - "Cuando necesitas respuesta corta y directa"
  - "Outputs que van a un sistema en formato rígido (JSON cerrado)"
howTo:
  - "Añade al final del prompt: 'Razona paso a paso antes de responder'"
  - "Para outputs estructurados, separa: '## Razonamiento' y '## Respuesta'"
  - "Pide que enumere los supuestos antes del razonamiento, para que los puedas cuestionar"
  - "Si luego sólo quieres la conclusión, añade: 'después de razonar, da una recomendación clara en una sola frase'"
example:
  without: "¿Deberíamos lanzar el producto en Q3 o Q4?"
  with: |
    Necesito decidir si lanzar el producto en Q3 o Q4.

    Antes de responder, razona paso a paso considerando:
    1. Estacionalidad del mercado
    2. Estado actual del producto (lo que sabes por el contexto)
    3. Recursos disponibles del equipo
    4. Riesgo competitivo

    Estructura tu respuesta:
    ## Supuestos
    ## Razonamiento (paso a paso)
    ## Recomendación (una frase)

    Contexto:
    <<<
    [PEGA AQUÍ EL CONTEXTO DEL PRODUCTO]
    >>>
  observation: "Sin la técnica el modelo da una opinión genérica que podría aplicar a cualquier producto. Con ella articula el trade-off específico y la recomendación es defendible ante el comité — podemos debatir los supuestos, no la conclusión a ciegas."
pitfalls:
  - "Esperar que CoT salve un prompt mal estructurado — sigue necesitando contexto"
  - "Combinar CoT con un formato JSON muy rígido sin reservar espacio para el razonamiento"
  - "Leer sólo la conclusión sin revisar los supuestos que la sostienen"
relatedTechniques:
  - "descomposicion-tareas"
  - "step-back"
  - "auto-critica"
references:
  - title: "Chain-of-Thought Prompting (Wei et al., 2022)"
    url: "https://arxiv.org/abs/2201.11903"
tags:
  - "razonamiento"
  - "analisis"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 7
---
