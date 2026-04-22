---
title: "Generated knowledge: conocimiento antes de responder"
shortName: "Generated knowledge"
level: "avanzado"
summary: "Pedir al modelo que genere conocimiento relevante —definiciones, marco conceptual, hechos relevantes— antes de abordar la pregunta principal mejora respuestas donde falta contexto previo."
whenToUse:
  - "Preguntas en dominios especializados donde se asume vocabulario"
  - "Cuando sospechas que el modelo va a saltar a la conclusión sin fundamento"
  - "Análisis en sectores que tú no dominas y necesitas que el modelo 'cargue' antes"
whenNotToUse:
  - "Preguntas simples donde el conocimiento ya está evidente"
  - "Tareas donde ya das el contexto completo en el prompt"
howTo:
  - "Antes de la tarea, pide: 'Primero enumera los 3–5 conceptos clave necesarios para abordar esta pregunta'"
  - "Pide definiciones breves (1 frase) de cada concepto"
  - "Luego pide que aplique ese conocimiento a la pregunta concreta"
  - "Útil combinado con step-back: primero marco, luego conocimiento, luego aplicación"
example:
  without: "¿Qué métrica de éxito deberíamos fijar para este piloto de SaaS B2B?"
  with: |
    Antes de responder a la pregunta específica:

    Paso 1 — Conocimiento previo:
    Enumera 5 conceptos/métricas clave para evaluar el éxito de un piloto de SaaS B2B. Para cada uno: definición en una frase y por qué importa.

    Paso 2 — Filtro para el caso:
    De esos 5, identifica cuáles son relevantes para nuestro caso concreto (abajo) y descarta los que no aplican, con razonamiento.

    Paso 3 — Propuesta:
    Propón 2–3 métricas concretas (con umbral específico) para este piloto, justificando la elección.

    Contexto del piloto:
    <<<
    [DESCRIBE PRODUCTO, CLIENTES, OBJETIVO DEL PILOTO, DURACIÓN]
    >>>
  observation: "Sin generated knowledge el modelo propone 'NPS' o 'retención' sin contexto. Con la técnica primero articula conceptos como activation, retention cohorts, time-to-value, y luego selecciona los que aplican al caso — la propuesta final es defendible porque está conectada con un marco."
pitfalls:
  - "Conocimiento generado demasiado genérico que no aporta al caso"
  - "No pedir que filtre y aplique: el modelo enumera teoría pero no la usa"
  - "Duplicar esta técnica cuando ya has dado contexto rico en el prompt original"
relatedTechniques:
  - "step-back"
  - "chain-of-thought"
references:
  - title: "Generated Knowledge Prompting (Liu et al., 2021)"
    url: "https://arxiv.org/abs/2110.08387"
tags:
  - "razonamiento"
  - "contexto"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 14
---
