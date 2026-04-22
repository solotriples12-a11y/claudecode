---
title: "Anclaje a documentos (grounding)"
shortName: "Anclaje a documentos"
level: "basico"
summary: "Restringir la respuesta a un texto concreto —'basándote ÚNICAMENTE en este documento'— reduce drásticamente las alucinaciones y es la técnica clave para resumen, análisis y extracción."
whenToUse:
  - "Resumen de informes, actas, transcripciones"
  - "Extracción de datos concretos de un documento"
  - "Preguntas sobre un corpus que has proporcionado"
  - "Cualquier tarea donde inventar sería peor que no responder"
whenNotToUse:
  - "Brainstorming o generación creativa"
  - "Cuando quieres que el modelo aporte conocimiento general además del documento"
howTo:
  - "Delimita claramente el texto: usa <<< >>>, triples backticks o etiquetas XML (<documento>…</documento>)"
  - "Instrucción explícita: 'Responde basándote ÚNICAMENTE en el contenido entre <<< >>>. Si la respuesta no está, di \"No encontrado en el documento\"'"
  - "Pide citas literales o referencias a secciones cuando sea útil para verificar"
  - "Añade una verificación: 'Antes de responder, confirma que cada afirmación se puede encontrar en el documento'"
example:
  without: "¿Qué dice el informe sobre las condiciones de pago?"
  with: |
    Responde basándote ÚNICAMENTE en el informe entre <<< >>>.
    Si la información no aparece explícitamente, responde "No se menciona en el informe".
    Cita literalmente la frase del informe que sustenta tu respuesta, entre comillas.

    Pregunta: ¿Qué condiciones de pago establece el informe?

    <<<
    [PEGA AQUÍ EL INFORME]
    >>>
  observation: "Sin anclaje, el modelo puede rellenar lagunas con condiciones 'típicas del sector' que no están en el informe. Con anclaje, te responde 'No se menciona' cuando corresponde, y cuando responde incluye la cita para verificar."
pitfalls:
  - "No delimitar el documento: el modelo confunde instrucciones con contenido"
  - "Olvidar la cláusula 'si no aparece, di no encontrado': sin ella el modelo sigue inventando"
  - "Anclar a un documento demasiado largo sin pedir al modelo que ignore lo irrelevante"
relatedTechniques:
  - "restricciones-negative-prompting"
  - "auto-critica"
references:
  - title: "Anthropic — Reduce hallucinations"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations"
tags:
  - "fundamentos"
  - "grounding"
  - "alucinaciones"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 5
---
