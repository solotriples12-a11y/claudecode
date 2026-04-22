---
title: "Few-shot prompting: aprender por ejemplos"
shortName: "Few-shot"
level: "intermedio"
summary: "Mostrar 1–3 ejemplos del input/output deseado enseña al modelo la forma exacta que quieres mejor que cualquier descripción en prosa. Imprescindible para formatos consistentes."
whenToUse:
  - "Cuando el formato es específico y no evidente (taxonomías internas, plantillas)"
  - "Cuando describir el estilo es más caro que mostrarlo"
  - "Tareas de clasificación con categorías propias"
  - "Generación de variaciones que deben ser homogéneas"
whenNotToUse:
  - "Tareas muy simples donde los ejemplos sólo añaden ruido"
  - "Cuando tus ejemplos son de mala calidad: el modelo los copia como referencia"
howTo:
  - "Muestra 1–3 ejemplos completos (input + output). Más ejemplos raramente ayudan y encarecen"
  - "Elige ejemplos que cubran la variedad de casos, no tres muy similares"
  - "Sepáralos claramente con etiquetas: <ejemplo>, ---, o Input:/Output:"
  - "Si algunos ejemplos son 'contraejemplos' (qué NO hacer), márcalos explícitamente"
  - "Termina con el input real sin output para que el modelo complete"
example:
  without: "Clasifica este ticket de soporte por prioridad."
  with: |
    Clasifica cada ticket por prioridad: P0 (parada total), P1 (funcionalidad crítica degradada), P2 (molestia no bloqueante).

    Ejemplo 1:
    Ticket: "La web del cliente devuelve 500 en el checkout, ningún usuario puede comprar."
    Prioridad: P0
    Razonamiento: parada total del flujo de negocio.

    Ejemplo 2:
    Ticket: "Los informes tardan 15 segundos en cargar, antes eran 3."
    Prioridad: P1
    Razonamiento: funcionalidad disponible pero degradada significativamente.

    Ejemplo 3:
    Ticket: "Un botón del panel de admin aparece con el color antiguo."
    Prioridad: P2
    Razonamiento: cosmético, no afecta a operaciones.

    Ticket real:
    "[PEGA AQUÍ EL TICKET]"
    Prioridad:
  observation: "Sin ejemplos, el modelo inventa su propia taxonomía (Alta/Media/Baja) y se desvía de la tuya. Con 3 ejemplos, clasifica de forma consistente en P0/P1/P2 y explica su razonamiento en el mismo estilo."
pitfalls:
  - "Ejemplos sesgados que concentran el output en una categoría"
  - "Ejemplos contradictorios entre sí"
  - "Demasiados ejemplos (>5) que saturan el contexto sin mejorar precisión"
relatedTechniques:
  - "formato-de-salida"
  - "estructura-del-prompt"
references:
  - title: "Language Models are Few-Shot Learners (Brown et al., 2020)"
    url: "https://arxiv.org/abs/2005.14165"
tags:
  - "ejemplos"
  - "clasificacion"
  - "consistencia"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 6
---
