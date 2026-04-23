---
title: "Executive summary de una propuesta"
useCase: "Resumen ejecutivo de una página para abrir una propuesta comercial"
category: "propuestas-comerciales"
level: "intermedio"
summary: "Genera un executive summary de una página que condense problema, aproximación, resultado esperado e inversión para el comité del cliente."
suitableFor:
  - "Primera página de propuestas dirigidas a un comité ejecutivo o C-level"
  - "Versión corta para stakeholders que no leerán toda la propuesta"
  - "Cierre de RFPs donde se pide un resumen separado del cuerpo técnico"
notSuitableFor:
  - "Propuestas sin cuerpo de propuesta detrás: el resumen necesita contenido que resumir"
  - "Oportunidades en fase muy temprana sin alcance ni coste definidos"
  - "Comunicaciones exploratorias o de cualificación, no vinculantes"
reviewChecklist:
  - "¿El resumen cabe en una página A4 con tipografía legible (≤ 300 palabras)?"
  - "¿El valor para el cliente aparece antes que la descripción del servicio?"
  - "¿Las cifras (plazo, inversión, equipo) coinciden con el cuerpo de la propuesta?"
  - "¿Has evitado jerga interna y acrónimos no explicados?"
  - "¿El cierre contiene una llamada a la acción concreta (firma, reunión, hito)?"
exampleInput: |
  Cliente: ACME Retail (cadena de supermercados, 120 tiendas).
  Problema: pérdida de 8% en margen por roturas de stock tras migrar su ERP; no saben dónde se concentra la fuga.
  Aproximación propuesta: 6 semanas, 2 fases (diagnóstico cuantitativo + pilot en 10 tiendas).
  Equipo: 1 partner, 1 manager, 2 consultores.
  Inversión: 95 k€.
  Resultado esperado: identificación de 3 palancas de recuperación de margen con cuantificación y plan de pilotaje.
  Firma: 09/05/2026. Arranque: 16/05/2026.
exampleOutput: |
  ## Resumen ejecutivo

  **Situación.** Tras la migración de ERP, ACME Retail ha visto caer su margen un 8 %,
  con un patrón de roturas de stock cuya causa raíz no está identificada. El impacto
  se acumula en las 120 tiendas de la red y condiciona los objetivos del año.

  **Nuestra aproximación.** Proponemos un proyecto de **6 semanas en dos fases**:

  1. *Diagnóstico cuantitativo (3 semanas):* análisis de los datos de stock y ventas
     para localizar dónde y por qué se concentra la fuga de margen.
  2. *Pilotaje en 10 tiendas (3 semanas):* validación de las 3 palancas de
     recuperación con mayor impacto esperado, con lectura semanal.

  **Resultado esperado.** Un plan accionable con tres palancas cuantificadas y
  probadas en tienda, listo para escalar al resto de la red en el tercer trimestre.

  **Equipo e inversión.** Un partner, un manager y dos consultores dedicados. La
  inversión total asciende a **95 000 €**, facturables contra hitos.

  **Calendario.** Firma el 9 de mayo, arranque el 16 de mayo, cierre del proyecto a
  finales de junio. Proponemos una reunión de arranque la semana siguiente a la firma.
tags:
  - "propuesta"
  - "executive-summary"
  - "comercial"
  - "rfp"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Opus 4.7"
---

Eres un socio de consultoría redactando el executive summary de una propuesta comercial que irá dirigida a un comité ejecutivo del cliente.

A partir del brief interno que recibirás, genera un resumen de una página con la siguiente estructura:

1. **Situación**: 2–3 frases que describan el problema del cliente en su lenguaje, no en el tuyo. Debe reflejar que has entendido el negocio, no sólo el síntoma.
2. **Nuestra aproximación**: un párrafo breve seguido de fases numeradas (máximo 3). Cada fase con nombre, duración y objetivo concreto.
3. **Resultado esperado**: qué se llevará el cliente al final, en términos de decisión, palanca o entregable accionable — no en términos de actividad.
4. **Equipo e inversión**: composición del equipo y cifra económica total con modalidad de facturación.
5. **Calendario**: fecha clave de firma, arranque y cierre; propuesta de siguiente paso.

Reglas:
- Máximo 300 palabras en total. El objetivo es que quepa en una página.
- El valor para el cliente (qué recibe, qué decide) debe aparecer antes que la descripción del servicio (qué hacemos nosotros).
- Nada de jerga interna, acrónimos sin explicar ni metodologías con nombre propio. Si usas un nombre de metodología, explícalo en la misma frase.
- No inventes cifras, plazos ni miembros de equipo que no estén en el brief. Si algo falta, márcalo como "[pendiente]".
- Tono profesional, sobrio, sin adjetivos de marketing ("líder", "disruptivo", "best-in-class").
- Usa negrita para resaltar la cifra económica y el plazo total, nada más.
- Responde únicamente con el resumen en markdown, sin preámbulo.

Brief interno:
<<<
[PEGA AQUÍ EL BRIEF CON CLIENTE, PROBLEMA, APROXIMACIÓN, EQUIPO, INVERSIÓN Y CALENDARIO]
>>>
