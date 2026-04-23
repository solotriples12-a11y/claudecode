---
title: "Plan de trabajo con hitos y dependencias"
useCase: "Plan de proyecto en fases, con hitos, entregables y riesgos"
category: "planificacion"
level: "intermedio"
summary: "Convierte un alcance cerrado en un plan de trabajo por fases con hitos, entregables, dependencias y riesgos principales."
suitableFor:
  - "Kick-off de proyectos con alcance y plazo razonablemente definidos"
  - "Anexos de propuestas donde el plan de trabajo es parte del compromiso"
  - "Base para una primera versión de cronograma que luego afinará el PM"
notSuitableFor:
  - "Proyectos en fase de cualificación, sin alcance ni equipo definidos"
  - "Sustituir un plan gestionado en herramienta (MS Project, Jira) — sólo construye la base textual"
  - "Estimaciones de esfuerzo bottom-up: este prompt planifica, no estima"
reviewChecklist:
  - "¿Las fases suman el plazo total y las duraciones son realistas con el equipo disponible?"
  - "¿Cada hito es verificable (una decisión, una aprobación, un artefacto medible)?"
  - "¿Las dependencias entre fases están explícitas y son correctas?"
  - "¿Los riesgos listados tienen owner y mitigación concreta, no genérica?"
  - "¿Has validado el plan con el PM o el responsable del proyecto antes de enviarlo?"
exampleInput: |
  Proyecto: POC de automatización del proceso de alta de clientes.
  Cliente: ACME Bank.
  Duración total: 8 semanas.
  Fechas: arranque 20/05/2026, cierre 15/07/2026.
  Equipo: 1 manager (50%), 2 consultores (100%), 1 dev (50% en fases 2–3).
  Alcance: análisis del proceso actual, diseño de la versión automatizada, implementación de un piloto sobre 1 canal (oficina) y medición de resultados.
  Restricciones: entorno cloud del cliente, no se pueden tocar sistemas legacy en producción durante el piloto.
exampleOutput: |
  ## Plan de trabajo — POC automatización alta de clientes · ACME Bank

  **Plazo total:** 8 semanas (20/05/2026 – 15/07/2026)
  **Equipo:** 1 manager (50 %), 2 consultores (100 %), 1 dev (50 % en fases 2–3)

  ---

  ### Fase 1 · Diagnóstico del proceso actual (semanas 1–2)
  - **Objetivo:** mapear el proceso de alta end-to-end e identificar cuellos de botella.
  - **Entregables:** mapa de proceso AS-IS, backlog priorizado de puntos de mejora.
  - **Hitos:** H1 — mapa AS-IS aprobado por Operaciones ACME (fin semana 2).
  - **Dependencias:** acceso a documentación interna y entrevistas con 5 stakeholders agendadas en semana 1.

  ### Fase 2 · Diseño de la versión automatizada (semanas 3–4)
  - **Objetivo:** definir el proceso TO-BE automatizado sobre el canal de oficina.
  - **Entregables:** mapa TO-BE, arquitectura funcional del POC, plan de medición.
  - **Hitos:** H2 — diseño aprobado por sponsor (fin semana 4).
  - **Dependencias:** H1 cerrado. Incorporación del dev al equipo.

  ### Fase 3 · Implementación del piloto (semanas 5–6)
  - **Objetivo:** desplegar el POC sobre una oficina piloto.
  - **Entregables:** POC funcional en entorno cloud, guía operativa.
  - **Hitos:** H3 — POC desplegado y operable (fin semana 6).
  - **Dependencias:** H2 cerrado. Oficina piloto identificada y formación a su equipo en semana 5.

  ### Fase 4 · Medición y cierre (semanas 7–8)
  - **Objetivo:** medir impacto del piloto y recomendar escalado.
  - **Entregables:** informe de resultados con KPIs del piloto, recomendación de escalado, lecciones aprendidas.
  - **Hitos:** H4 — comité de cierre con recomendación (15/07/2026).
  - **Dependencias:** H3 cerrado con al menos 2 semanas de operación real.

  ---

  ### Riesgos principales

  | Riesgo | Impacto | Probabilidad | Mitigación | Owner |
  |---|---|---|---|---|
  | Retraso en accesos al entorno cloud | Alto | Media | Solicitar accesos y perfiles en semana 0, antes del arranque formal | PM cliente |
  | Disponibilidad baja de stakeholders en entrevistas | Medio | Media | Cerrar agenda completa antes de semana 1, con backup de personas | PM nuestro |
  | Cambios de alcance en fase 3 | Alto | Baja | Congelar alcance en H2; cualquier cambio se evalúa en comité | Sponsor ACME |
  | Indisponibilidad del dev (asignado al 50 %) | Medio | Media | Reservar días del dev de forma bloqueada en calendario en semanas 3–6 | Manager |
tags:
  - "planificacion"
  - "plan-trabajo"
  - "hitos"
  - "riesgos"
  - "project-management"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Opus 4.7"
---

Eres un manager de consultoría convirtiendo un alcance cerrado en un plan de trabajo estructurado.

A partir del input que recibirás, genera un plan con la siguiente forma:

1. **Cabecera**: título del proyecto, plazo total y composición del equipo.
2. **Fases numeradas**: cada fase con
   - *Objetivo* de la fase (una frase en términos de negocio, no de actividad).
   - *Entregables* concretos que quedan al final de la fase.
   - *Hitos* verificables (aprobación, decisión, artefacto medible), numerados H1, H2, H3…
   - *Dependencias* internas (otros hitos) y externas (accesos, equipo, input del cliente).
3. **Tabla de riesgos** con columnas: Riesgo, Impacto (Alto/Medio/Bajo), Probabilidad (Alta/Media/Baja), Mitigación concreta, Owner.

Reglas:
- Las fases deben cubrir el plazo total sin huecos ni solapes excesivos. Ajusta las duraciones al equipo disponible y a las restricciones del input.
- Cada hito debe ser verificable por un tercero: "mapa aprobado por X", no "avance del diagnóstico".
- No inventes miembros de equipo, sistemas ni dependencias que no aparezcan en el input.
- Las mitigaciones deben ser accionables, con owner y timing implícito. Evita "monitorizar" o "comunicar" genéricos.
- Entre 3 y 5 fases, y entre 3 y 6 riesgos principales. Si el proyecto es corto, menos fases.
- Nada de jerga metodológica sin justificación ("agile", "waterfall", "lean"). El plan describe qué se hace, no cómo se llama.
- Responde sólo con el plan en markdown, sin preámbulo.

Input:
<<<
[PEGA AQUÍ PROYECTO, CLIENTE, PLAZO, EQUIPO, ALCANCE Y RESTRICCIONES]
>>>
