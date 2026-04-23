---
title: "Benchmark de competidores"
useCase: "Tabla comparativa de competidores con criterios homogéneos"
category: "investigacion"
level: "basico"
summary: "Construye una tabla comparativa de competidores a partir de una lista de empresas y criterios, con celda de observaciones cualitativas por competidor."
suitableFor:
  - "Mapa competitivo para un capítulo de propuesta o informe"
  - "Benchmark rápido previo a una decisión de posicionamiento"
  - "Comparativa de vendors en un proceso de selección"
notSuitableFor:
  - "Análisis cuantitativo profundo con cifras financieras sensibles"
  - "Evaluaciones donde la ponderación de criterios determina la decisión (requiere workshop humano)"
  - "Mercados muy opacos donde la información pública es insuficiente"
reviewChecklist:
  - "¿Has verificado al menos un dato duro por competidor (tamaño, producto principal, fecha)?"
  - "¿Los criterios están definidos de forma homogénea para todos los competidores?"
  - "¿Has marcado como 'n/d' los datos no encontrados, en lugar de dejarlos en blanco o inventarlos?"
  - "¿La columna de observaciones añade matiz cualitativo sin sesgo comercial?"
  - "¿La tabla se lee en menos de un minuto?"
exampleInput: |
  Sector: plataformas de e-learning corporativo en Europa.
  Competidores a comparar: Coursera for Business, LinkedIn Learning, Udemy Business, Cornerstone, Docebo.
  Criterios:
    - Modelo de precios
    - Tamaño del catálogo
    - Idiomas soportados
    - Integraciones con LMS/HR
    - Diferenciador principal
  Perspectiva: cliente potencial de tamaño mediano (500–2.000 empleados).
exampleOutput: |
  ## Benchmark — plataformas de e-learning corporativo (Europa)

  | Competidor | Modelo de precios | Catálogo | Idiomas | Integraciones | Diferenciador |
  |---|---|---|---|---|---|
  | Coursera for Business | Licencia por usuario/año, tramos por volumen | Amplio (miles de cursos, orientación universitaria) | Multilenguaje, núcleo en EN | SCORM, xAPI, principales HRIS | Cursos con instituciones académicas reconocidas |
  | LinkedIn Learning | Licencia por usuario, integrado en LinkedIn | Amplio, rotación alta, foco en skills | Multilenguaje, buena cobertura europea | Integra con LinkedIn y principales HRIS | Datos de skills del perfil profesional |
  | Udemy Business | Licencia por usuario/año | Muy amplio, calidad heterogénea | Multilenguaje extenso | SCORM, xAPI, HRIS | Marketplace con gran variedad temática |
  | Cornerstone | Licencia LMS/talent suite | Catálogo propio + contenido de terceros | Multilenguaje | Suite talent completa | Plataforma end-to-end de talento |
  | Docebo | Licencia por usuario activo | Contenido propio + marketplace | Multilenguaje | APIs y marketplace de integraciones | Plataforma flexible con extensiones |

  ### Observaciones cualitativas
  - **Coursera for Business**: encaja bien en perfiles con demanda de acreditación formal; menos competitivo en skills muy operativas.
  - **LinkedIn Learning**: despliegue rápido si la empresa ya usa LinkedIn, pero depende del ecosistema Microsoft.
  - **Udemy Business**: alta variedad a coste por usuario contenido; exige curación interna para evitar ruido.
  - **Cornerstone**: más propuesta de suite de talento que LXP pura; encaja si ya buscas unificar LMS + performance.
  - **Docebo**: balance entre flexibilidad y coste para clientes de 500–2.000 empleados; curva de configuración algo mayor.

  _Datos a 04/2026. Verificar precios y alcance de integraciones contra hoja comercial vigente._
tags:
  - "benchmark"
  - "competidores"
  - "investigacion"
  - "mapa-competitivo"
author: "Equipo PromptHub"
reviewedAt: 2026-04-23
recommendedModel: "Claude Sonnet 4.6"
---

Eres un analista construyendo una tabla comparativa de competidores. El objetivo es una fotografía rápida y homogénea, no un análisis exhaustivo.

A partir de la lista de competidores y criterios que recibirás, genera:

1. **Título** con el sector y el ámbito geográfico/temporal.
2. **Tabla markdown**: una fila por competidor, una columna por criterio. Respeta exactamente el orden de competidores y criterios del input.
3. **Observaciones cualitativas**: bullets con un comentario breve por competidor (1–2 líneas) que aporten matiz que la tabla no captura, desde la perspectiva indicada en el input.
4. **Pie de tabla**: fecha de referencia y aviso de que los datos deben verificarse contra fuente comercial vigente.

Reglas:
- Mantén las celdas breves: máximo 6–8 palabras por celda para que la tabla se lea de un vistazo.
- Usa `n/d` cuando no tengas un dato fiable. **No inventes cifras, precios ni fechas.**
- Los criterios deben aplicarse de forma homogénea: la misma pregunta para todos los competidores.
- Las observaciones cualitativas se escriben desde la perspectiva indicada (cliente potencial, inversor, partner…). Deben ser neutras, sin tono comercial.
- No declares ganador ni recomiendes proveedor. El output es un insumo para que un humano decida.
- Si un competidor ocupa un nicho claramente distinto, dilo en su observación en lugar de forzar la comparación.
- Responde únicamente con el markdown pedido.

Input:
<<<
[PEGA AQUÍ SECTOR, COMPETIDORES, CRITERIOS Y PERSPECTIVA]
>>>
