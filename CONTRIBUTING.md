# Cómo contribuir a PromptHub

Gracias por querer ampliar la biblioteca. Esta guía cubre todo lo que necesitas
para añadir un **prompt** o una **técnica** nueva, o editar algo existente.

La biblioteca tiene dos tipos de contenido con roles complementarios:

- **Prompt** (`src/content/prompts/*.md`): texto listo para copiar y usar con
  un cliente. El consultor lo ejecuta.
- **Técnica** (`src/content/techniques/*.md`): ficha conceptual sobre **cómo
  prompteamos** (Chain-of-Thought, few-shot, descomposición…). El consultor la
  aprende y la aplica para adaptar cualquier prompt.

## Flujo de trabajo

1. Crea una rama desde `main` con un nombre descriptivo.
   Por ejemplo: `prompt/revision-calidad-deck`.
2. Añade o edita un archivo `.md` en `src/content/prompts/`.
   - El nombre de archivo es el `slug` y debe ser kebab-case, sin tildes ni
     caracteres especiales: `sintesis-reunion-cliente.md`.
3. Lanza `npm run check` en local: valida tipos y schema.
4. Abre un pull request explicando brevemente:
   - Qué tarea resuelve el prompt.
   - En qué escenarios lo has probado.
   - Si reemplaza o amplía a un prompt existente.
5. Al menos una persona del equipo revisa. Foco de la revisión:
   - ¿El prompt es claro y reutilizable?
   - ¿El checklist de revisión es accionable y específico?
   - ¿Los ejemplos son realistas y no contienen datos reales de cliente?

## Anatomía de un prompt

Un prompt vive en un único archivo markdown con dos partes: **frontmatter**
(metadatos estructurados) y **cuerpo** (el texto literal del prompt que el
usuario copia al pulsar "Copiar prompt").

### Frontmatter

```yaml
---
title: "Título corto y claro"
useCase: "Para qué tarea lo usarías"
category: "comunicacion-cliente"          # slug de la lista controlada
level: "basico"                            # basico | intermedio | avanzado
summary: "Una o dos frases que describan qué hace."
suitableFor:
  - "Caso apropiado 1"
  - "Caso apropiado 2"
notSuitableFor:
  - "Caso que NO cubre"
  - "Situación donde puede dañar más que ayudar"
reviewChecklist:
  - "¿Pregunta accionable 1?"
  - "¿Pregunta accionable 2?"
exampleInput: |
  [Input mínimo realista]
exampleOutput: |
  [Salida esperada del modelo]
tags: ["tag1", "tag2"]
author: "Tu nombre o equipo"
reviewedAt: 2026-04-15
recommendedModel: "Claude Opus 4.7"      # opcional
---
```

El schema Zod (ver `src/content/config.ts`) valida todo esto en build. Si algo
falta o es inválido, el comando `npm run build` o `npm run check` falla.

### Cuerpo

Todo lo que va **después del frontmatter** es el prompt literal. Es lo que se
copia al portapapeles al pulsar el botón "Copiar prompt" en la ficha.

No incluyas explicaciones meta-prompt en el cuerpo ("este prompt sirve para…").
Esa información ya vive en el frontmatter.

## Cómo elegir categoría

Las categorías están en una lista controlada para evitar duplicados. Consulta
`src/lib/categories.ts`. Actuales:

- `comunicacion-cliente` — Síntesis, actas, emails, seguimientos.
- `propuestas-comerciales` — Redacción y revisión de propuestas.
- `analisis-critico` — Revisión de entregables propios antes de enviar.
- `investigacion` — Research, benchmarking, desk research.
- `planificacion` — Roadmaps, planes de trabajo, estimaciones.

Si tu prompt no encaja en ninguna, abre una issue proponiendo la categoría
antes de crear el PR. Evita categorías con un solo prompt.

## Cómo elegir nivel

- **basico**: útil sin experiencia previa con IA generativa. Input corto,
  output predecible, bajo riesgo.
- **intermedio**: requiere que el usuario sepa evaluar la salida y ajustarla.
  Input estructurado, output a revisar antes de compartir.
- **avanzado**: exige criterio profesional para usarlo bien. Output que
  parece correcto pero puede tener fallos sutiles (análisis, red team,
  decisiones).

## Convenciones de redacción

### En el frontmatter

- `title`: menos de 70 caracteres, nombrar la tarea, no el modelo.
  - Bien: "Síntesis de reunión con cliente".
  - Mal: "Prompt de Claude para hacer actas".
- `summary`: una o dos frases orientadas al usuario, no al prompt.
  - Bien: "Genera un acta estructurada a partir de notas de reunión".
  - Mal: "Este prompt toma notas y produce un acta".
- `suitableFor` y `notSuitableFor`: casos concretos, no abstracciones.
  - Mal: "Para reuniones importantes".
  - Bien: "Reuniones de descubrimiento o kickoff con stakeholders".
- `reviewChecklist`:
  - Cada ítem debe ser una **pregunta accionable**: algo que el consultor
    puede responder sí/no mirando el output.
  - Céntrate en los fallos reales del output, no en buenas prácticas genéricas.
  - Incluye siempre al menos un check sobre **datos sensibles** si el prompt
    puede procesarlos.
  - Entre 3 y 6 ítems. Menos parece incompleto; más se ignora.
- `exampleInput` / `exampleOutput`: usa datos ficticios pero verosímiles.
  Nunca incluyas información real de clientes, compañeros o proyectos.

### En el cuerpo del prompt

- Escribe en segunda persona ("Tu tarea es…", "Recibirás…").
- Define el **rol**, la **tarea**, el **formato de salida** y las **reglas**.
  En ese orden.
- Si el prompt recibe un input del usuario, delimítalo visualmente. Patrón
  recomendado:
  ```
  Input:
  <<<
  [PEGA AQUÍ EL INPUT]
  >>>
  ```
- Evita frases mágicas del tipo "piensa paso a paso" sin razón: si el
  razonamiento explícito ayuda, pide explícitamente qué tipo de razonamiento.
- Termina con "Responde únicamente con X, sin preámbulo" si quieres output
  directo sin texto conversacional.
- No incluyas el valor del input en el cuerpo del archivo: deja un placeholder.
  El usuario pegará el input después de copiar el prompt.

## Qué hace un buen checklist de revisión

El checklist es el principal diferencial de PromptHub frente a un listado de
prompts. Debe servir para que un consultor con prisa detecte en 30 segundos
si el output está listo o necesita ajuste.

Un buen check:
- Pregunta algo **específico del output de este prompt**, no del uso de IA en
  general.
- Se puede **responder mirando** el output, sin necesidad de volver a correr el
  modelo.
- Alerta sobre **fallos típicos** de este prompt, no posibilidades teóricas.

Ejemplo malo (genérico): "¿Has revisado el output?".
Ejemplo bueno (específico): "¿Las decisiones listadas coinciden con tu
recuerdo de la reunión?".

## Cuándo actualizar un prompt existente

Si mejoras un prompt:
- Mantén el mismo nombre de archivo para no romper enlaces.
- Actualiza `reviewedAt` a la fecha del cambio.
- Documenta en el PR qué cambió y por qué.

Si el cambio es radical y puede confundir a quien ya lo usa, crea un prompt
nuevo con otro slug y deja el antiguo en su sitio.

---

## Cómo contribuir una técnica

Una **técnica** documenta un patrón de prompting (no un prompt concreto).
Ejemplos: "Chain-of-Thought", "Few-shot", "Descomposición de tareas". Vive en
`src/content/techniques/` con su propio schema.

### Cuándo añadir una técnica nueva

- Es una técnica **probada en literatura o práctica habitual**, no una opinión
  personal.
- Un consultor puede **aplicarla sin cambiar de herramienta** (vale vía chat).
- Tiene una diferencia clara frente a las técnicas ya documentadas. Si se
  solapa 80% con una existente, amplía esa ficha en lugar de duplicar.
- Se puede explicar con un ejemplo **antes/después** que muestre la mejora.

Si no cumple las cuatro, probablemente no merece ficha propia.

### Anatomía de una técnica

```yaml
---
title: "Nombre completo con matiz explicativo"
shortName: "Nombre corto para badges y enlaces"
level: "intermedio"                 # basico | intermedio | avanzado
summary: "Una o dos frases que capturen qué hace y cuándo vale."
whenToUse:
  - "Escenario concreto donde brilla"
  - "Otro escenario concreto"
whenNotToUse:
  - "Cuándo NO aporta o incluso perjudica"
  - "Escenario donde otra técnica es mejor"
howTo:
  - "Paso 1 accionable para aplicarla"
  - "Paso 2 con detalle concreto"
  - "Paso 3 con una variante útil"
example:
  without: |
    Prompt sin aplicar la técnica (realista, no simplista)
  with: |
    Prompt aplicando la técnica
  observation: "Qué cambia entre ambos y por qué."
pitfalls:                           # opcional
  - "Error común 1 con antídoto"
  - "Error común 2"
relatedTechniques:                  # opcional, slugs de otras técnicas
  - "chain-of-thought"
references:                         # opcional, papers o lecturas serias
  - title: "Título del paper o recurso"
    url: "https://…"
tags: ["razonamiento", "formato"]
author: "Tu nombre o equipo"
reviewedAt: 2026-04-22
order: 7                            # orden manual dentro de su nivel en el index
---

# Cuerpo opcional

Explicación más larga si la técnica lo merece. Puedes omitirlo si el
frontmatter ya cuenta la historia completa.
```

### Criterios específicos para técnicas

- **`summary`**: que un consultor leyendo sólo el summary decida si quiere
  abrir la ficha. Evita fórmulas como "una técnica muy útil".
- **`example`**: es el bloque más importante. El `without` debe ser realista
  (un prompt plausible, no un hombre de paja), y el `with` debe mostrar la
  aplicación limpia. El `observation` explica qué mejora — una frase, no un
  ensayo.
- **`howTo`**: pasos imperativos y concretos. Si un paso empieza por "considera"
  o "piensa en", probablemente no es un paso, es un consejo.
- **`references`**: sólo si aportan. Un paper académico está bien; un blog post
  aleatorio no. Si no hay referencia seria, omite el campo.
- **`order`**: orden manual dentro del nivel en el index. Cuando añadas una
  técnica nueva, elige un número que la sitúe donde debería ir pedagógicamente.
  No es obligatorio que sean consecutivos.

### Qué NO hacer en una técnica

- No conviertas una técnica en un prompt disfrazado. Si lo que tienes es un
  prompt reutilizable concreto, va en `prompts/`, no aquí.
- No mezcles varias técnicas en una sola ficha. Si hablas de CoT Y
  descomposición, son dos fichas con `relatedTechniques` cruzado.
- No añadas disclaimers sobre IA en general. La ficha va al grano.
