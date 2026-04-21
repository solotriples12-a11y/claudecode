---
title: "Síntesis de reunión con cliente"
useCase: "Documentación post-meeting"
category: "comunicacion-cliente"
level: "basico"
summary: "Genera un acta estructurada de una reunión con cliente a partir de notas desestructuradas o transcripción."
suitableFor:
  - "Reuniones de descubrimiento, kickoff o seguimiento"
  - "Workshops de requisitos con stakeholders"
  - "Comités de proyecto con varios asistentes"
notSuitableFor:
  - "Reuniones con datos personales o confidenciales sin anonimizar"
  - "Reuniones estratégicas cuya materia no esté autorizada para herramientas de IA"
  - "Conversaciones informales donde un acta aportaría más ruido que señal"
reviewChecklist:
  - "¿Has anonimizado nombres, clientes y datos sensibles antes del input?"
  - "¿Las decisiones y action items coinciden con tu recuerdo de la reunión?"
  - "¿Has verificado fechas, importes y referencias numéricas concretas?"
  - "¿El tono y el nivel de detalle son apropiados para el destinatario final?"
  - "¿Has añadido contexto que el modelo no podía inferir (p. ej. acuerdos previos)?"
exampleInput: |
  Notas crudas de la reunión del 18/04 con ACME:
  - Juan (ACME) pregunta por timeline. Le decimos Q3.
  - María (nosotros) propone POC de 4 semanas. Juan ok.
  - Presupuesto: mencionan 80-100k, sin confirmar.
  - Próxima reunión: viernes 25 para cerrar alcance.
  - Juan quiere ver caso de uso similar en retail.
exampleOutput: |
  ## Acta — Reunión con ACME · 18/04/2026

  **Asistentes:** Juan (ACME), María (nosotros)

  **Decisiones:**
  - Se propone una prueba de concepto de 4 semanas; ACME acepta la aproximación.
  - Timeline objetivo del proyecto: Q3.

  **Temas abiertos:**
  - Presupuesto mencionado en rango 80–100 k€, pendiente de confirmación por ACME.
  - ACME solicita ver un caso de uso comparable en sector retail.

  **Próximos pasos:**
  - Preparar propuesta de alcance del POC (responsable: María, para el 25/04).
  - Compartir caso de uso retail anonimizado (responsable: María, antes del 25/04).
  - Reunión de cierre de alcance: viernes 25/04.
tags:
  - "reunion"
  - "sintesis"
  - "acta"
  - "comunicacion"
  - "cliente"
author: "Equipo PromptHub"
reviewedAt: 2026-04-15
recommendedModel: "Claude Opus 4.7"
---

Eres un consultor senior redactando el acta de una reunión con cliente.

A continuación recibirás notas desestructuradas de la reunión. Tu tarea es producir un acta profesional, concisa y accionable con la siguiente estructura:

1. **Encabezado**: título con nombre del cliente y fecha.
2. **Asistentes**: lista de participantes con su organización entre paréntesis.
3. **Decisiones**: acuerdos cerrados durante la reunión, redactados en pasado perfecto o presente ("Se acuerda…", "Se ha decidido…").
4. **Temas abiertos**: cuestiones discutidas sin cierre, marcando explícitamente lo que queda pendiente de confirmar.
5. **Próximos pasos**: lista de action items con formato "Acción (responsable: Nombre, fecha: DD/MM)".

Reglas:
- No inventes datos que no estén en las notas. Si algo es ambiguo, márcalo como pendiente en lugar de asumirlo.
- Usa tono profesional y neutro, sin adjetivos valorativos.
- Mantén el acta breve: el objetivo es que alguien que no asistió entienda el resultado en menos de dos minutos.
- Si las notas contienen cifras, fechas o nombres concretos, respétalos literalmente.
- Responde únicamente con el acta, sin preámbulo ni comentarios sobre tu proceso.

Notas de la reunión:
<<<
[PEGA AQUÍ LAS NOTAS O TRANSCRIPCIÓN]
>>>
