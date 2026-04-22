---
title: "Restricciones y negative prompting"
shortName: "Restricciones (qué NO hacer)"
level: "basico"
summary: "Decirle explícitamente al modelo qué NO hacer evita los errores más frecuentes: jerga, afirmaciones sin base, extensión excesiva, inventar datos."
whenToUse:
  - "Cuando hay patrones de salida que siempre te molestan (jerga, disclaimers, preámbulos)"
  - "En outputs para cliente, donde un tono incorrecto quema confianza"
  - "Cuando el modelo tiende a inventar cifras o referencias"
whenNotToUse:
  - "Como sustituto de contexto o formato — las restricciones refinan, no construyen"
  - "Prohibiendo tanto que el modelo no sabe qué SÍ hacer"
howTo:
  - "Formula cada restricción en positivo cuando puedas: 'Usa lenguaje llano' en vez de 'No uses jerga'"
  - "Sé específico: 'no inventes datos' → 'si no tienes el dato, escribe \"[pendiente de confirmar]\"'"
  - "Limita a 3–5 restricciones de alto impacto; demasiadas se ignoran"
  - "Prohíbe explícitamente los tics más comunes: preámbulos ('Claro, aquí tienes…'), disclaimers innecesarios, emojis si no los quieres"
example:
  without: "Redacta un email de seguimiento al cliente sobre la reunión de ayer."
  with: |
    Redacta un email de seguimiento al cliente sobre la reunión de ayer.

    Formato: asunto + cuerpo. Máximo 120 palabras de cuerpo.

    Restricciones:
    - No empieces con "Espero que estés bien" ni fórmulas de cortesía vacías
    - No inventes fechas, nombres o cifras que no estén en mis notas
    - No uses superlativos ("excelente reunión", "gran oportunidad")
    - Si falta información crítica, dilo al final en una sección "Pendiente de mi parte"
    - Responde sólo con el email, sin explicar tu proceso

    Notas de la reunión:
    <<<
    [PEGA AQUÍ LAS NOTAS]
    >>>
  observation: "Sin restricciones, obtienes un email con 'Espero que este email te encuentre bien' y superlativos que hay que quitar a mano. Con ellas, el email ya se puede enviar tras revisar datos."
pitfalls:
  - "Dar una lista enorme de 'no hagas'; el modelo atiende a las primeras y olvida el resto"
  - "Formular restricciones en negativo cuando la equivalente en positivo es más clara"
  - "Prohibir algo sin dar alternativa ('no uses bullets' sin decir qué usar)"
relatedTechniques:
  - "estructura-del-prompt"
  - "formato-de-salida"
  - "anclaje-a-documentos"
tags:
  - "fundamentos"
  - "restricciones"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 4
---
