---
title: "Asignación de rol o persona"
shortName: "Rol / persona"
level: "basico"
summary: "Pedirle al modelo que adopte un rol concreto —'Eres un consultor senior especializado en…'— encuadra vocabulario, profundidad y punto de vista sin tener que describirlos uno a uno."
whenToUse:
  - "Cuando el registro profesional del output es crítico (cliente, comité)"
  - "Cuando quieres una perspectiva específica (crítico, auditor, abogado del diablo)"
  - "Cuando el dominio es muy técnico y quieres evitar simplificaciones"
whenNotToUse:
  - "Tareas puramente mecánicas (extraer datos, contar ítems)"
  - "Cuando el rol no cambiaría el output (preguntas factuales)"
howTo:
  - "Sé específico: 'consultor senior' es mejor que 'experto'; 'especializado en M&A para mid-market' aún mejor"
  - "Combina el rol con la audiencia: 'Eres X escribiendo para Y'"
  - "Usa rol para encuadrar el enfoque crítico: 'Eres un auditor revisando este documento'"
  - "Evita roles fantasiosos ('Eres Shakespeare') cuando quieras profesionalismo — sí cuando quieras estilo"
example:
  without: "¿Qué riesgos ves en esta propuesta?"
  with: |
    Eres un socio senior de una firma de consultoría revisando la propuesta de un equipo junior antes de enviarla al cliente. Tu objetivo es proteger la relación con el cliente y el margen del proyecto.

    Identifica los riesgos de esta propuesta en tres categorías:
    - Riesgos de entrega (alcance, plazos, dependencias)
    - Riesgos comerciales (pricing, condiciones, expectativas)
    - Riesgos reputacionales (promesas difíciles de cumplir)

    Para cada riesgo da: descripción, probabilidad (alta/media/baja) y mitigación propuesta.

    Propuesta:
    <<<
    [PEGA AQUÍ LA PROPUESTA]
    >>>
  observation: "Sin rol obtienes una lista genérica de 'posibles problemas'. Con el rol de socio senior el modelo prioriza riesgos que importan al negocio de la firma, no riesgos académicos."
pitfalls:
  - "Contradecir el rol con instrucciones ('Eres un experto legal, explícalo como si tuviera 5 años')"
  - "Delegar en el rol lo que debería ir en contexto o restricciones"
  - "Usar roles que imponen sesgos no deseados ('Eres un vendedor') en tareas que requieren objetividad"
relatedTechniques:
  - "estructura-del-prompt"
  - "auto-critica"
tags:
  - "fundamentos"
  - "rol"
  - "persona"
author: "Equipo PromptHub"
reviewedAt: 2026-04-22
order: 3
---
