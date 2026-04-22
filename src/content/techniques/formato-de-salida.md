---
title: "Especificación del formato de salida"
shortName: "Formato de salida"
level: "basico"
summary: "Decirle al modelo exactamente en qué forma quieres la respuesta —JSON, tabla, bullets, longitud, idioma, secciones— reduce reescritura y asegura que el output encaja en tu deliverable."
whenToUse:
  - "Cuando el output va a ir a un sistema (JSON, CSV)"
  - "Cuando vas a pegar la respuesta en un documento con una estructura fija"
  - "Cuando la longitud importa (slide, email, tweet, informe)"
whenNotToUse:
  - "Brainstorming libre o exploración de ideas"
  - "Conversaciones iterativas donde aún no sabes qué forma quieres"
howTo:
  - "Describe la estructura por secciones, ejemplo: 'Devuelve un JSON con claves name, summary, tags'"
  - "Especifica longitud: 'máximo 200 palabras', 'exactamente 5 bullets', 'tweet de 280 caracteres'"
  - "Indica idioma y tono: 'responde en español (es-ES), registro formal'"
  - "Para outputs estructurados, muestra un ejemplo de la forma esperada"
example:
  without: "Dame 3 propuestas de titular para este post."
  with: |
    Dame exactamente 3 titulares para este post.

    Formato:
    - Devuelve JSON: { "titulares": [{"texto": "...", "tono": "...", "longitud": 0}] }
    - "tono" debe ser uno de: "directo", "aspiracional", "provocador"
    - "longitud" es el número de caracteres
    - Máximo 70 caracteres por titular

    Post:
    <<<
    [PEGA AQUÍ EL POST]
    >>>
  observation: "Sin formato recibes tres frases en prosa que hay que contar a mano. Con formato recibes un JSON que puedes pasar a un sistema, filtrar por tono o longitud, y comparar objetivamente."
pitfalls:
  - "Pedir JSON sin dar el schema: el modelo inventa claves inconsistentes"
  - "Restricciones contradictorias ('extenso pero breve') que el modelo resuelve al azar"
  - "Imponer un formato rígido a una tarea creativa, matando la variedad útil"
relatedTechniques:
  - "estructura-del-prompt"
  - "few-shot"
tags:
  - "fundamentos"
  - "formato"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 2
---
