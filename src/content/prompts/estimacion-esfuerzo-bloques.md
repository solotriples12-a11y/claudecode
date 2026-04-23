---
title: "Estimación de esfuerzo por bloques"
useCase: "Estimación inicial en días-persona a partir de un alcance"
category: "planificacion"
level: "basico"
summary: "Descompone un alcance en bloques de trabajo y da una estimación en días-persona con rango y supuestos explícitos."
suitableFor:
  - "Primera estimación para cualificar una oportunidad"
  - "Base interna antes de pasar el número al partner para validación"
  - "Comparar dos alternativas de alcance (mínimo vs. completo)"
notSuitableFor:
  - "Comprometer cifras a cliente sin revisión humana — esto es una estimación base"
  - "Proyectos con alta novedad técnica donde la incertidumbre es dominante"
  - "Re-estimaciones de proyectos en curso con datos reales (usa los reales)"
reviewChecklist:
  - "¿Los bloques cubren todo el alcance y nada queda sin estimar (ni se estima dos veces)?"
  - "¿Los rangos reflejan la incertidumbre real — mayores donde sabes menos?"
  - "¿Los supuestos son explícitos y están todos en el documento?"
  - "¿Has contrastado la cifra global contra un proyecto similar pasado?"
  - "¿Has separado esfuerzo por perfil (junior, senior, experto) si el equipo es mixto?"
exampleInput: |
  Alcance a estimar:
  Migración de un sitio corporativo estático de WordPress a Astro + Netlify,
  incluyendo: inventario de páginas (~40 páginas + blog con 120 entradas),
  rediseño visual ligero (no redesign completo, sólo actualización), migración
  de contenido, redirecciones SEO y formación básica al equipo de marketing.

  Equipo disponible: 1 tech lead + 1 dev frontend + 1 diseñador puntual.

  Profundidad: estimación inicial para propuesta, no compromiso final.
exampleOutput: |
  ## Estimación de esfuerzo — migración WordPress → Astro

  **Unidad:** días-persona (d/p). Rango bajo = ejecución sin imprevistos; rango alto = con buffer razonable.

  ### Supuestos
  - El contenido de las 120 entradas de blog es migrable programáticamente (export MD).
  - No se cambia la estructura de URLs salvo las marcadas explícitamente en el mapa de redirecciones.
  - El rediseño visual es una actualización de sistema de estilos, no un rediseño completo.
  - El cliente facilita accesos (WP admin, DNS, Netlify) en semana 1.
  - Formación al equipo de marketing es una sesión de 2h + guía escrita.

  ### Bloques de trabajo

  | Bloque | Perfil | Rango (d/p) | Notas |
  |---|---|---|---|
  | Inventario y mapa de redirecciones | Tech lead | 2 – 3 | Base para el resto del proyecto |
  | Setup Astro + pipeline Netlify + CI | Tech lead | 2 – 4 | Incluye previews por PR |
  | Sistema de estilos actualizado | Diseñador + frontend | 4 – 6 | Depende de guía de marca vigente |
  | Plantillas (páginas + blog) | Frontend | 5 – 8 | Cubre ~6 plantillas reutilizables |
  | Migración de contenido (40 páginas + 120 entradas) | Frontend | 4 – 7 | Si el export MD es limpio, el tramo bajo es realista |
  | Redirecciones SEO y verificación | Tech lead | 2 – 3 | Lista desde el inventario + pruebas |
  | QA cruzado y accesibilidad básica | Frontend + tech lead | 2 – 4 | Checklist WCAG AA básica |
  | Formación marketing + guía escrita | Tech lead | 1 – 2 | Sesión de 2h + doc |
  | Gestión y comunicación con cliente | Tech lead | 2 – 3 | Transversal, buffer mínimo |

  ### Totales
  - **Rango total:** 24 – 40 d/p.
  - **Perfil tech lead:** 9 – 15 d/p.
  - **Perfil frontend:** 11 – 19 d/p.
  - **Perfil diseñador:** 3 – 5 d/p.

  ### Riesgos a la estimación
  - Export de WordPress con contenido embebido (shortcodes, plugins) puede
    duplicar el esfuerzo del bloque de migración.
  - Si aparece un rediseño "pequeño pero real" durante el proyecto, los
    bloques de diseño y plantillas se multiplican fácilmente x2.

  _Estimación inicial para propuesta — no compromiso. Validar con tech lead antes de fijar precio._
tags:
  - "estimacion"
  - "planificacion"
  - "esfuerzo"
  - "propuesta"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Sonnet 4.6"
---

Eres un consultor técnico haciendo una primera estimación de esfuerzo para un alcance dado. El objetivo es una cifra defendible internamente, no un compromiso comercial.

A partir del alcance que recibirás, genera un documento en markdown con:

1. **Unidad y criterio del rango**: normalmente días-persona, con definición explícita de qué significan el rango bajo y el rango alto.
2. **Supuestos**: lista de supuestos que condicionan la estimación. Si un supuesto cae, la estimación cambia.
3. **Tabla de bloques**: columna de bloque, perfil principal, rango `bajo – alto` en días-persona, y una nota breve.
4. **Totales**: total global con rango, más totales por perfil si el equipo es mixto.
5. **Riesgos a la estimación**: eventos específicos que, si se materializan, harían que la estimación se quede corta. Con un verbo en indicativo, no en condicional vago.
6. **Nota de cierre**: recordatorio de que es estimación base y requiere validación humana antes de convertirse en compromiso.

Reglas:
- Los bloques deben cubrir todo el alcance, sin solapes. Si algo del alcance no está, dilo.
- Los rangos deben reflejar incertidumbre real: cuanto menos sepas de un bloque, más amplio el rango. Un bloque con rango "5 – 5" casi nunca es honesto.
- No inventes perfiles que no estén en el input. Si el input no especifica equipo, asume "consultor generalista" y dilo en los supuestos.
- Evita precisión falsa: si dudas entre 3 y 5 días, di 3 – 5. No digas 4,2.
- Suma de rangos globales = suma de rangos por bloque. Comprueba antes de responder.
- Nada de "depende" sin cuantificar. Cada "depende" se convierte en un supuesto explícito o un riesgo concreto.
- Responde sólo con el documento en markdown.

Alcance a estimar:
<<<
[PEGA AQUÍ EL ALCANCE, EQUIPO DISPONIBLE Y NIVEL DE PROFUNDIDAD ESPERADO]
>>>
