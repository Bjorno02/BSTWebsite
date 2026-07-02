export async function register() {
  // Node 25+ ships an experimental Web Storage global (`localStorage`) that,
  // when no `--localstorage-file` is configured, is a non-functional stub:
  // `typeof localStorage` is "object" but `localStorage.getItem` is undefined.
  // Some dependencies feature-detect `typeof localStorage !== 'undefined'`
  // during SSR and then call `.getItem`, which throws and 500s the page.
  // Remove the broken stub on the server so those checks correctly fall
  // through to their no-op branch. This is a no-op on Node LTS (where no
  // server-side `localStorage` exists) and on the Edge runtime.
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    typeof globalThis.localStorage === 'object' &&
    typeof globalThis.localStorage?.getItem !== 'function'
  ) {
    // The property is a configurable getter, so deletion is permitted.
    delete (globalThis as { localStorage?: unknown }).localStorage;
    delete (globalThis as { sessionStorage?: unknown }).sessionStorage;
  }
}
