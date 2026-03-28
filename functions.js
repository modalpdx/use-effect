// Central registry: effectId → { fn, deps, cleanup }
const effects = new Map();
let _id = 0;

// Single reactive state object for the page.
// The set trap fires any effect whose dep list includes the changed key
// (or has no dep list at all — run on every change).
const state = new Proxy({}, {
  set(target, key, value) {
    if (target[key] === value) return true;
    target[key] = value;
    effects.forEach(e => {
      if (!e.deps || e.deps.includes(key)) {
        if (e.cleanup) e.cleanup();
        e.cleanup = e.fn() ?? null;
      }
    });
    return true;
  }
});

// Mirrors React's useEffect(fn, deps).
//   useEffect(fn)            – run on every state change
//   useEffect(fn, [])        – run once
//   useEffect(fn, ['count']) – run when state.count changes
function useEffect(fn, deps) {
  const id = ++_id;
  effects.set(id, { fn, deps: deps ?? null, cleanup: null });
  effects.get(id).cleanup = fn() ?? null;
}
