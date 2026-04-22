---
title: "Auto-crítica y refinamiento"
shortName: "Auto-crítica"
level: "intermedio"
summary: "Pedir al modelo que revise su propia salida buscando errores, huecos o sesgos antes de entregarla es la técnica más barata para subir calidad sin escribir código."
whenToUse:
  - "Cualquier output que vaya a cliente o a comité"
  - "Análisis donde el coste de un error es alto"
  - "Cuando tú no eres experto en la materia y necesitas una capa extra de revisión"
whenNotToUse:
  - "Outputs simples donde la auto-crítica sobrerresponde"
  - "Cuando el modelo no tiene criterios claros para auto-evaluarse"
howTo:
  - "Tras la primera respuesta, pide: 'Revisa tu respuesta con ojo crítico y corrige errores, imprecisiones o afirmaciones sin base'"
  - "Da criterios concretos: '¿Hay cifras sin justificar? ¿Hay recomendaciones sin trade-off? ¿Falta algún supuesto explícito?'"
  - "Para outputs importantes, hazlo en dos turnos: primero la respuesta, después la crítica + versión refinada"
  - "Combina con rol: 'Ahora asume el rol de un socio senior escéptico y critica esta respuesta'"
example:
  without: "Dame un resumen ejecutivo de este informe."
  with: |
    Turno 1:
    "Dame un resumen ejecutivo de este informe en 5 bullets.
    Informe: <<<[INFORME]>>>"

    Turno 2 (tras recibir la respuesta):
    "Ahora revisa ese resumen con ojo crítico. Responde en dos bloques:

    ## Crítica
    - ¿Hay algún bullet que sea opinión disfrazada de hecho?
    - ¿Se omite algún punto crítico del informe original?
    - ¿Hay cifras o afirmaciones que el informe no sustenta?
    - ¿El tono es apropiado para comité de dirección?

    ## Versión refinada
    El resumen corregido, incorporando las críticas anteriores."
  observation: "La primera versión suele tener un par de afirmaciones sin base o un bullet demasiado genérico. La crítica los detecta y la versión refinada ya es enviable. Coste: un prompt extra; beneficio: evitas revisión humana línea por línea."
pitfalls:
  - "Confiar en que la auto-crítica detecta todo — sigue habiendo errores que se escapan"
  - "Hacer la crítica demasiado vaga ('¿está bien?'); hay que dar criterios"
  - "Saltarse la crítica en outputs importantes por ahorrar un paso"
relatedTechniques:
  - "chain-of-thought"
  - "iteracion-conversacional"
  - "meta-prompting"
references:
  - title: "Self-Refine: Iterative Refinement with Self-Feedback (Madaan et al., 2023)"
    url: "https://arxiv.org/abs/2303.17651"
tags:
  - "calidad"
  - "revision"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 9
---
