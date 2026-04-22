---
title: "Tree of Thoughts: explorar varias ramas"
shortName: "Tree of Thoughts"
level: "avanzado"
summary: "Hacer que el modelo genere varias alternativas de razonamiento en paralelo, las evalúe y elija la mejor, da mejores resultados en problemas con múltiples soluciones plausibles."
whenToUse:
  - "Decisiones estratégicas con varias aproximaciones viables"
  - "Problemas de diseño donde hay trade-offs entre opciones"
  - "Brainstorming estructurado con evaluación crítica"
  - "Cuando la primera respuesta razonable no es la mejor"
whenNotToUse:
  - "Problemas con una única respuesta correcta"
  - "Tareas donde el coste de exploración no se justifica"
  - "Outputs que no toleran longitud extra"
howTo:
  - "Pide al modelo que genere 3 enfoques distintos, cada uno con su lógica"
  - "Para cada enfoque, pide pros y contras explícitos"
  - "Pide que evalúe los tres contra criterios comunes (coste, riesgo, plazo, alineamiento estratégico)"
  - "Finalmente, pide una recomendación con justificación basada en la evaluación"
  - "Variante: pide que abandone enfoques poco prometedores temprano y profundice en el mejor"
example:
  without: "¿Cómo deberíamos abordar la implantación del nuevo sistema?"
  with: |
    Vamos a explorar varias aproximaciones antes de decidir.

    1. Genera exactamente 3 enfoques distintos para implantar el nuevo sistema. Cada uno con:
       - Nombre corto
       - Descripción en 2 frases
       - Filosofía subyacente (qué prioriza)

    2. Para cada enfoque, evalúa contra estos criterios:
       - Riesgo de entrega (alto/medio/bajo)
       - Tiempo hasta primer valor entregado
       - Coste total estimado (orden de magnitud)
       - Impacto organizativo

    3. Elige el enfoque recomendado y justifica por qué supera a los otros dos, no sólo por qué es bueno.

    Contexto:
    <<<
    [DESCRIBE EL PROYECTO Y LA ORGANIZACIÓN]
    >>>
  observation: "Sin ToT obtienes una respuesta 'razonable' sin alternativa. Con ToT obtienes tres opciones evaluadas contra los mismos criterios, y la recomendada viene con contraste explícito — mucho más convincente para un cliente o un comité."
pitfalls:
  - "Generar ramas artificialmente diferentes (mismo enfoque con distintos nombres)"
  - "Evaluar con criterios vagos que no permiten comparar"
  - "Seleccionar la primera rama y no comparar realmente"
relatedTechniques:
  - "chain-of-thought"
  - "self-consistency"
  - "descomposicion-tareas"
references:
  - title: "Tree of Thoughts (Yao et al., 2023)"
    url: "https://arxiv.org/abs/2305.10601"
tags:
  - "razonamiento"
  - "decision"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 12
---
