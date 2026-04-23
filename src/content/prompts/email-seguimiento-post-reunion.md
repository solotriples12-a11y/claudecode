---
title: "Email de seguimiento post-reunión"
useCase: "Email breve con acuerdos y próximos pasos tras una reunión"
category: "comunicacion-cliente"
level: "basico"
summary: "Redacta un email conciso al cliente que confirma acuerdos, responsables y próximos pasos a partir del acta o notas de la reunión."
suitableFor:
  - "Seguimiento el mismo día tras reuniones de trabajo o comités"
  - "Cierre de conversaciones donde hay decisiones que conviene dejar por escrito"
  - "Enlazar con adjuntos o materiales prometidos durante la reunión"
notSuitableFor:
  - "Comunicaciones delicadas (escaladas, cambios de alcance, reclamaciones)"
  - "Emails que requieran negociación o persuasión, no sólo confirmación"
  - "Mensajes con información confidencial que no deba pasar por herramientas externas"
reviewChecklist:
  - "¿Los responsables y fechas del email coinciden con los del acta?"
  - "¿Has adaptado el tono al nivel del interlocutor (operativo vs. directivo)?"
  - "¿Todas las acciones tienen dueño explícito, evitando voz pasiva?"
  - "¿Has eliminado frases de relleno (agradecimientos excesivos, disculpas innecesarias)?"
  - "¿El asunto refleja claramente el contenido y la reunión de origen?"
exampleInput: |
  Acta resumida de la reunión del 18/04 con ACME:
  - Timeline objetivo: Q3.
  - POC de 4 semanas aceptado.
  - Presupuesto 80–100k€ pendiente de confirmar.
  - Próxima reunión: viernes 25/04 para cerrar alcance.
  - Compromiso: enviar caso retail antes del 25/04.

  Destinatario: Juan (ACME), copia a María (interno).
  Tono: cercano pero profesional.
exampleOutput: |
  **Asunto:** Seguimiento reunión 18/04 — próximos pasos POC

  Hola Juan,

  Gracias por la sesión de ayer. Resumo lo acordado para dejarlo por escrito:

  - **Aproximación:** seguimos adelante con un POC de 4 semanas, con timeline objetivo Q3.
  - **Presupuesto:** pendiente de tu confirmación en la horquilla comentada (80–100 k€).
  - **Compromiso por nuestra parte:** te enviaré antes del viernes 25/04 un caso de uso comparable en sector retail.
  - **Próxima reunión:** viernes 25/04 para cerrar alcance del POC.

  Si ves algo que ajustar, dímelo y lo revisamos antes del viernes.

  Un saludo,
  María
tags:
  - "email"
  - "seguimiento"
  - "comunicacion"
  - "cliente"
  - "reunion"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Sonnet 4.6"
---

Eres un consultor redactando un email de seguimiento post-reunión para un cliente.

A partir del acta o notas que recibirás, escribe un email breve con la siguiente estructura:

1. **Asunto**: claro, con referencia a la reunión o al tema.
2. **Saludo personal**: con el nombre del destinatario principal.
3. **Frase inicial**: una línea, agradecimiento breve sin florituras.
4. **Bloque de puntos acordados**: 3–5 bullets, cada uno con negrita en la categoría (Aproximación, Presupuesto, Próximos pasos…) seguida del detalle.
5. **Cierre accionable**: invita a responder si algo no cuadra, con fecha límite si aplica.
6. **Firma**: nombre del remitente.

Reglas:
- No inventes acuerdos, fechas ni responsables que no estén en el acta.
- Cada acción pendiente debe tener dueño explícito ("nosotros" / "tú" / nombre concreto) y fecha si se mencionó.
- Elimina relleno: nada de "como comentamos", "según lo acordado", "no dudes en…".
- Máximo 150 palabras en el cuerpo del email.
- Si el acta menciona algo confidencial (importes no firmados, nombres internos), mátenlo si no es apropiado enviárselo al destinatario.
- Adapta el tono al indicado (cercano, formal, ejecutivo). Por defecto: profesional y directo.
- Responde únicamente con el email completo (asunto + cuerpo + firma), sin comentarios.

Input:
<<<
[PEGA AQUÍ EL ACTA O NOTAS + DESTINATARIO Y TONO]
>>>
