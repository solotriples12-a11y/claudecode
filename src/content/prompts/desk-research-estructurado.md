---
title: "Desk research estructurado con fuentes"
useCase: "Investigación preliminar sobre un tema, sector o tendencia con trazabilidad"
category: "investigacion"
level: "intermedio"
summary: "Produce una primera investigación estructurada sobre un tema con hallazgos clave, datos relevantes y fuentes citadas, lista para validar por un humano."
suitableFor:
  - "Arranque de un proyecto en un sector que no dominas"
  - "Preparación de una reunión con un cliente de un vertical nuevo"
  - "Construir el contexto inicial de una propuesta o memo"
notSuitableFor:
  - "Research que deba citar datos en tiempo real sin acceso a web"
  - "Estudios cuantitativos rigurosos que requieran dataset propio"
  - "Temas donde la fiabilidad de una cifra concreta sea crítica sin validación humana"
reviewChecklist:
  - "¿Has verificado manualmente al menos las 3 cifras más citables del documento?"
  - "¿Cada afirmación relevante tiene una fuente y no hay inventos (alucinaciones)?"
  - "¿Las fuentes son de calidad razonable (institucionales, prensa seria, papers) o hay enlaces poco fiables?"
  - "¿Has distinguido entre hechos, opiniones de analistas y extrapolaciones?"
  - "¿El nivel de profundidad coincide con el uso final (briefing vs. informe)?"
exampleInput: |
  Tema: estado del mercado europeo de carga rápida de vehículos eléctricos (2024–2026).
  Enfoque: tamaño de mercado, principales operadores, tendencias regulatorias y dolores percibidos por los usuarios.
  Uso final: briefing interno previo a una propuesta.
  Profundidad: ~1.500 palabras.
  Idioma: español.
exampleOutput: |
  ## Carga rápida de VE en Europa — briefing 2024–2026

  ### Resumen ejecutivo
  - El parque de puntos de carga rápida (≥ 150 kW) en la UE ha crecido un X %
    interanual, impulsado por la normativa AFIR [1].
  - Los tres principales operadores paneuropeos son Ionity, Fastned y Tesla
    Supercharger abierto a terceros [2][3].
  - El dolor principal del usuario sigue siendo la fiabilidad operativa del
    punto, por encima del precio por kWh, según varios estudios de
    asociaciones de consumidores [4].

  ### 1. Tamaño y crecimiento del mercado
  [… desarrollo con cifras y fuentes …]

  ### 2. Operadores y movimientos recientes
  [… desarrollo …]

  ### 3. Marco regulatorio: AFIR y transposición nacional
  [… desarrollo …]

  ### 4. Dolores del usuario final
  [… desarrollo …]

  ### Huecos detectados
  - Datos de cuota de mercado por operador a nivel país: no he encontrado
    cifra pública reciente; habría que consultar fuente de pago.
  - Tasa real de disponibilidad de puntos (uptime): existen estimaciones de
    prensa pero no dato oficial agregado.

  ### Fuentes
  [1] Reglamento (UE) 2023/1804 (AFIR) — DOUE, 22/09/2023.
  [2] Ionity — nota de prensa corporativa, fecha / url.
  [3] Fastned — informe anual 2024, url.
  [4] Transport & Environment, "EV charging survey 2024", url.

  _Última revisión manual por [nombre, fecha]. Verificar cifras señaladas con [!] antes de citar externamente._
tags:
  - "investigacion"
  - "desk-research"
  - "benchmark"
  - "fuentes"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Opus 4.7"
---

Eres un analista haciendo desk research inicial sobre un tema que un consultor usará como punto de partida — nunca como versión final.

A partir del tema y el enfoque que recibirás, produce un documento estructurado en markdown con la siguiente forma:

1. **Resumen ejecutivo**: 3–5 bullets con los hallazgos clave, cada uno con referencia a una fuente `[n]`.
2. **Secciones temáticas**: una sección por cada sub-tema solicitado, con datos, contexto y referencias numeradas.
3. **Huecos detectados**: datos que no has podido conseguir o donde la evidencia es débil; indica qué harías para conseguirlos.
4. **Fuentes**: lista numerada al final, con autor/organismo, título, fecha y URL cuando aplique.

Reglas:
- **No inventes fuentes, cifras ni fechas.** Si no tienes información fiable sobre un punto, dilo en la sección "Huecos detectados". Un hueco honesto vale más que un dato inventado.
- Marca con `[!]` cualquier cifra que sea especialmente importante o citable, para que el revisor humano la verifique antes de usarla externamente.
- Distingue claramente entre hechos ("X% según fuente Y"), opiniones de analistas ("analistas como Z esperan…") y extrapolaciones ("si se mantiene la tendencia…").
- Usa fuentes de calidad: organismos oficiales, reguladores, papers, asociaciones sectoriales, prensa especializada. Evita blogs personales y contenido claramente promocional.
- No uses bullets donde un párrafo explica mejor la idea, ni párrafos donde un bullet basta.
- Al final añade una nota recordando la necesidad de revisión humana antes de publicar o citar.
- Ajusta la profundidad al uso final y longitud pedidos. No alargues por alargar.

Tema e instrucciones:
<<<
[INDICA AQUÍ EL TEMA, ENFOQUE, USO FINAL, PROFUNDIDAD E IDIOMA]
>>>
