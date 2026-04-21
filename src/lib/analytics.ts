/**
 * Telemetry hook. Centraliza los eventos para que la integración futura con
 * Plausible o PostHog se haga aquí sin tocar el resto del código.
 */
export type EventName =
  | 'prompt_copied'
  | 'search_performed'
  | 'category_viewed'
  | 'prompt_viewed';

export function trackEvent(name: EventName, props: Record<string, unknown> = {}): void {
  // TODO: integrar Plausible o PostHog.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, props);
  }
}
