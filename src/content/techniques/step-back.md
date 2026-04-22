---
title: "Step-back prompting"
shortName: "Step-back"
level: "avanzado"
summary: "Antes de responder a una pregunta concreta, pedir al modelo que haga una pregunta más general que la enmarque mejora la calidad del razonamiento en problemas técnicos o abstractos."
whenToUse:
  - "Preguntas técnicas específicas que se benefician de contexto conceptual"
  - "Cuando el modelo tiende a responder con datos superficiales"
  - "Diagnóstico: antes de mirar el síntoma, entender el sistema"
  - "Decisiones donde falta enmarcar bien el problema"
whenNotToUse:
  - "Preguntas factuales directas"
  - "Cuando el marco ya está claro y el modelo sólo necesita ejecutar"
howTo:
  - "Instrucción explícita: 'Antes de responder, formula y responde una pregunta más general que contextualice la pregunta concreta'"
  - "Ejemplo: si la pregunta es 'qué estructura legal usar para este proyecto', la step-back es 'qué factores determinan la elección de estructura legal en este tipo de proyectos'"
  - "Después de responder la pregunta general, pide aplicar ese marco al caso concreto"
  - "Para problemas complejos, encadena step-back con chain-of-thought"
example:
  without: "¿Deberíamos usar microservicios o un monolito para este proyecto?"
  with: |
    Antes de responder a la pregunta específica, da un paso atrás:

    Paso 1 (step-back): Formula una pregunta más general que enmarque ésta. Ej: "¿Qué factores determinan la elección entre microservicios y monolito en un proyecto?" Responde a esa pregunta general primero.

    Paso 2 (específico): Ahora aplica ese marco al caso concreto descrito abajo.

    Paso 3 (recomendación): Da una recomendación clara con una frase de justificación.

    Contexto del proyecto:
    <<<
    [DESCRIBE EL PROYECTO: equipo, carga, complejidad, plazo]
    >>>
  observation: "Sin step-back, el modelo da una respuesta directa basada en el contexto superficial y es difícil saber por qué. Con step-back, primero enumera los factores relevantes (tamaño del equipo, latencia, independencia de despliegue…), y luego aplica el marco al caso. Puedes debatir el marco o los factores, no sólo la conclusión."
pitfalls:
  - "Step-back excesivamente abstracto que no se conecta con la pregunta real"
  - "Usarlo en preguntas simples, donde sólo alarga sin aportar"
  - "No pedir explícitamente la conexión del marco general con el caso concreto"
relatedTechniques:
  - "chain-of-thought"
  - "generated-knowledge"
references:
  - title: "Take a Step Back (Zheng et al., 2023)"
    url: "https://arxiv.org/abs/2310.06117"
tags:
  - "razonamiento"
  - "marco"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 11
---
