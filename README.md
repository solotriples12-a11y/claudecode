# PromptHub

Biblioteca interna de prompts curados para consultores. Cada ficha incluye un
checklist de revisión pensado para ayudarte a validar la salida antes de
compartirla con cliente.

Esta es una web estática: todo el contenido vive como archivos markdown con
frontmatter, no hay backend ni login. Se construye con Astro y se despliega
como sitio estático interno.

## Qué encontrarás

- **Home** con buscador global y filtros por categoría y nivel.
- **Categorías** con los prompts agrupados por tipo de tarea.
- **Ficha de prompt** con el texto completo, ejemplos de input y output,
  metadatos y un checklist de revisión visible junto al botón de copiar.

## Stack

- [Astro 5](https://astro.build/) con Content Collections validadas vía Zod.
- [Tailwind CSS](https://tailwindcss.com/) para el estilado.
- [MiniSearch](https://lucaong.github.io/minisearch/) para la búsqueda en
  cliente, con pesos por campo y prefijo.
- TypeScript.

No hay backend. La búsqueda se hace íntegramente en el navegador cargando un
índice ligero desde `/search-index.json`.

## Correr el proyecto en local

Requisitos: Node 20 o superior.

```bash
npm install
npm run dev
```

La app queda disponible en <http://localhost:4321>.

Otros scripts útiles:

```bash
npm run build     # Genera sitio estático en dist/
npm run preview   # Sirve el build localmente
npm run check     # Type-check + validación de Content Collections
```

## Cómo contribuir un prompt

El flujo habitual es:

1. Crear una rama desde `main`.
2. Añadir un archivo `.md` en `src/content/prompts/` siguiendo el schema
   (ver `CONTRIBUTING.md` para el detalle y las convenciones de estilo).
3. Abrir un pull request. El pipeline ejecuta `astro check`, que valida el
   frontmatter contra el schema Zod; si falta un campo o tiene un valor
   inválido (por ejemplo `level: "experto"`), el build falla con un mensaje
   claro.
4. Revisión entre pares y merge.

Consulta [`CONTRIBUTING.md`](./CONTRIBUTING.md) para los detalles: estructura
del frontmatter, cómo elegir categoría y nivel, convenciones de redacción y
qué hace un buen checklist de revisión.

## Estructura del repositorio

```
src/
├── content/
│   ├── config.ts          # Schema Zod del frontmatter
│   └── prompts/           # Un .md por prompt
├── components/            # Componentes Astro (SearchBox, CopyButton, ...)
├── layouts/
├── lib/
│   ├── categories.ts      # Lista controlada de categorías y niveles
│   ├── search-index.ts    # Configuración de MiniSearch
│   └── analytics.ts       # Stub de telemetría (listo para Plausible/PostHog)
├── pages/
│   ├── index.astro
│   ├── categorias/
│   ├── prompts/
│   └── search-index.json.ts
└── styles/
```

## Telemetría

Actualmente sin integración real. El módulo `src/lib/analytics.ts` expone una
función `trackEvent(name, props)` que se invoca desde `CopyButton` y
`SearchBox`. Integrar Plausible o PostHog es un cambio localizado en ese
único archivo.

## Fuera de alcance

Este repositorio no incluye (por ahora):

- Autenticación ni control de acceso.
- Comentarios, ratings ni historial visible de versiones.
- Integraciones con Teams, Slack o plataformas de LLM corporativas.
- Analítica real.

## Licencia

Uso interno de la firma.
