---
title: "Borrador de propuesta comercial"
useCase: "Primera versión de propuesta para cliente"
category: "propuestas-comerciales"
level: "intermedio"
summary: "Genera un primer borrador estructurado de propuesta comercial a partir del brief interno y el contexto del cliente."
suitableFor:
  - "Propuestas a cliente existente con alcance razonablemente definido"
  - "Respuestas a peticiones informales (no RFPs formales)"
  - "Primera versión que un consultor senior refinará después"
notSuitableFor:
  - "RFPs formales con requisitos legales o de cumplimiento específicos"
  - "Propuestas cuyo diferencial dependa de metodología propietaria no compartible con el modelo"
  - "Clientes cuyo nombre o información sensible no pueda compartirse con herramientas de IA"
reviewChecklist:
  - "¿Has sustituido o anonimizado información comercialmente sensible antes del input?"
  - "¿El alcance propuesto coincide con lo que has pactado internamente con el equipo?"
  - "¿Las cifras de esfuerzo, equipo y timeline son realistas para vuestra capacidad actual?"
  - "¿La propuesta incluye supuestos y exclusiones explícitas?"
  - "¿Has revisado que no haya promesas implícitas de resultados que no podáis garantizar?"
  - "¿El lenguaje encaja con la cultura del cliente (más formal vs. más directo)?"
exampleInput: |
  Cliente: retailer mediano, 300 tiendas, nos conocen de un proyecto previo de analítica.
  Necesidad: quieren entender qué caso de uso de IA generativa abordar primero.
  Brief interno: proponer un assessment de 6 semanas, equipo de 2 consultores + 1 arquitecto part-time, entregable = priorización de 3 casos + roadmap 12 meses.
  Presupuesto estimado: 90k€.
exampleOutput: |
  ## Propuesta — Assessment de casos de uso de IA generativa

  ### 1. Contexto
  Tras las conversaciones mantenidas, entendemos que [Cliente] quiere identificar
  y priorizar los primeros casos de uso de IA generativa con mayor impacto en su
  operativa de retail, partiendo del conocimiento adquirido en el proyecto previo
  de analítica.

  ### 2. Objetivos
  - Identificar entre 8 y 12 oportunidades candidatas en las áreas de operaciones
    de tienda, atención a cliente y procesos de soporte.
  - Priorizar las 3 de mayor impacto y viabilidad a corto plazo.
  - Definir un roadmap de 12 meses con hitos trimestrales.

  ### 3. Alcance y entregables
  - Workshop inicial con stakeholders clave (semana 1).
  - Benchmark del sector retail (semanas 2–3).
  - Mapa priorizado de casos de uso (semanas 4–5).
  - Roadmap 12 meses y presentación a comité (semana 6).

  ### 4. Equipo y esfuerzo
  - 2 consultores senior a tiempo completo durante 6 semanas.
  - 1 arquitecto de soluciones a 30% durante las semanas 4–6.

  ### 5. Supuestos y exclusiones
  - No incluye desarrollo ni puesta en producción de los casos de uso.
  - Asumimos acceso a 6–8 stakeholders para las entrevistas en las semanas 1–2.

  ### 6. Inversión
  Honorarios fijos: 90.000 € + IVA.

  ### 7. Próximos pasos
  Confirmación de alcance en reunión del [fecha], firma de carta de encargo la
  semana siguiente y arranque en [fecha de inicio].
tags:
  - "propuesta"
  - "comercial"
  - "brief"
  - "assessment"
author: "Equipo PromptHub"
reviewedAt: 2026-04-12
recommendedModel: "Claude Opus 4.7"
---

Eres un consultor senior redactando un primer borrador de propuesta comercial para un cliente corporativo.

Recibirás un brief interno con el contexto del cliente, la necesidad detectada y los parámetros de la propuesta (equipo, timeline, presupuesto, entregables). Tu tarea es producir un borrador estructurado y profesional con las siguientes secciones:

1. **Contexto** (1 párrafo): reformula lo que has entendido de la situación del cliente. Señal de que habéis escuchado.
2. **Objetivos** (3–5 bullets): qué se busca conseguir, redactado desde la perspectiva de valor para el cliente.
3. **Alcance y entregables** (lista con fases o semanas): qué incluye la propuesta y en qué orden.
4. **Equipo y esfuerzo**: composición del equipo y dedicación.
5. **Supuestos y exclusiones**: explicita qué asumes y qué queda fuera. Esta sección protege a ambas partes.
6. **Inversión**: honorarios. Usa la cifra del brief; si no hay cifra, deja un placeholder `[Inversión: por confirmar]`.
7. **Próximos pasos**: 2–3 acciones concretas para avanzar.

Reglas de redacción:
- Tono profesional, directo, sin jerga innecesaria. Evita superlativos ("excepcional", "líder", "world-class").
- No hagas promesas de resultado que no puedan garantizarse ("garantizamos un ROI del X%"); habla de impacto esperado o rango.
- Si el brief no menciona algo, no lo inventes: deja placeholder `[Por confirmar: X]`.
- No incluyas cláusulas legales, de propiedad intelectual ni de confidencialidad: eso lo añade el equipo legal después.
- Mantén el borrador por debajo de 600 palabras.
- Responde únicamente con el borrador, sin preámbulo.

Brief interno:
<<<
[PEGA AQUÍ EL BRIEF]
>>>
