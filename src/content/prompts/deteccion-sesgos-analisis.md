---
title: "Detección de sesgos en un análisis"
useCase: "Revisar un análisis propio buscando sesgos cognitivos antes de compartirlo"
category: "analisis-critico"
level: "intermedio"
summary: "Identifica sesgos cognitivos habituales (confirmación, anclaje, supervivencia…) en un análisis propio y sugiere cómo contrarrestarlos."
suitableFor:
  - "Análisis con datos parciales donde tu interpretación influye mucho en la conclusión"
  - "Recomendaciones basadas en casos de éxito anecdóticos o pocos ejemplos"
  - "Memos internos antes de compartirlos con un segundo revisor humano"
notSuitableFor:
  - "Sustituir una revisión metodológica formal (estadística, auditoría)"
  - "Cuando los datos son sólidos y lo que pides es edición de estilo"
  - "Análisis en los que el sesgo a detectar es de naturaleza legal o normativa"
reviewChecklist:
  - "¿Has leído cada sesgo detectado y confirmado que aplica a tu caso, o lo has descartado con argumentos?"
  - "¿Las pruebas que pide el modelo para contrastar el sesgo son realistas con los datos disponibles?"
  - "¿Has anotado en el análisis los sesgos que no vas a corregir y por qué?"
  - "¿Has separado los sesgos del análisis (reales) de los que son de la redacción (estilo)?"
  - "¿Has contrastado con un segundo humano al menos los sesgos marcados como alto impacto?"
exampleInput: |
  Análisis breve:
  "Recomendamos a ACME migrar a la nube en 2026. Tres de nuestros últimos
  cuatro clientes similares han migrado con éxito, lo que confirma que es el
  camino correcto. El único que no migró tuvo problemas de legacy muy
  específicos que ACME no presenta. El TCO estimado baja un 20 % en 3 años
  según nuestro modelo interno, coincidiendo con la propuesta inicial del
  CIO de ACME."
exampleOutput: |
  ## Sesgos detectados

  ### 1. Sesgo de supervivencia — impacto alto
  - **Dónde:** "Tres de nuestros últimos cuatro clientes similares han migrado con éxito".
  - **Por qué:** la muestra se limita a clientes que llegaron a migrar; no sabes cuántos se plantearon migrar y lo descartaron por razones que sí aplicarían a ACME.
  - **Cómo contrastar:** recupera también los casos en los que recomendamos no migrar o la migración se abortó. Si no existen, reconoce que la muestra es sesgada.

  ### 2. Sesgo de confirmación — impacto medio
  - **Dónde:** "coincidiendo con la propuesta inicial del CIO de ACME".
  - **Por qué:** el análisis se cierra apoyando una hipótesis pre-existente del interlocutor. No hay evidencia de haber buscado activamente refutaciones.
  - **Cómo contrastar:** lista 2–3 escenarios bajo los cuales la recomendación sería "no migrar" y comprueba si alguno aplica a ACME.

  ### 3. Anclaje en el TCO — impacto medio
  - **Dónde:** "baja un 20 % en 3 años según nuestro modelo interno".
  - **Por qué:** se presenta la cifra sin rango de incertidumbre ni sensibilidades. Un número redondo ancla al lector.
  - **Cómo contrastar:** añade un rango (p. ej. 12–25 %) y las 2 asunciones con más impacto en el resultado.

  ### 4. Descartar el contraejemplo — impacto bajo
  - **Dónde:** "el único que no migró tuvo problemas de legacy muy específicos".
  - **Por qué:** explicación ad hoc que neutraliza el único dato en contra sin criterio explícito.
  - **Cómo contrastar:** define *a priori* qué condiciones de legacy harían a un cliente no comparable, antes de mirar el caso.

  **Nota.** Ningún sesgo listado invalida la recomendación, pero corregirlos mejora su defensa ante un comité crítico.
tags:
  - "revision"
  - "sesgos"
  - "analisis-critico"
  - "red-team"
  - "decisiones"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Opus 4.7"
---

Eres un consultor senior experto en análisis crítico y toma de decisiones. Tu tarea es revisar un análisis propio buscando **sesgos cognitivos** que podrían estar condicionando las conclusiones, no errores de cálculo ni de estilo.

Para cada sesgo que detectes, devuelve:

1. **Nombre del sesgo** y **nivel de impacto** (alto / medio / bajo) en la conclusión principal.
2. **Dónde aparece**: cita textual o paráfrasis breve del pasaje del análisis.
3. **Por qué aplica**: explica la mecánica del sesgo con el ejemplo concreto, sin teorizar en abstracto.
4. **Cómo contrastar**: una acción específica que permita validar o descartar el sesgo con los datos disponibles. Nada de "hacer más research" genérico.

Reglas:
- Busca activamente sesgos clásicos: confirmación, anclaje, supervivencia, disponibilidad, encuadre, descartar contraejemplos, extrapolación desde pocos casos, sesgo de autoridad, falacia narrativa.
- No inventes sesgos donde no los hay. Si un pasaje está bien fundamentado, no lo incluyas. Mejor un informe corto y certero que uno inflado.
- Ordena de mayor a menor impacto en la conclusión.
- No reescribas el análisis. Tu salida es una lista diagnóstica que el autor usará para decidir qué corrige.
- Si al final ningún sesgo tiene impacto alto, dilo explícitamente en una nota de cierre: el objetivo no es encontrar fallos a toda costa.
- Responde en markdown con la estructura `### N. Nombre del sesgo — impacto X` para cada hallazgo, seguida de los cuatro campos.

Análisis a revisar:
<<<
[PEGA AQUÍ EL ANÁLISIS COMPLETO]
>>>
