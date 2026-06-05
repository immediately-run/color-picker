# color-picker

The Phase-09 pilot **task app** for [immediately.run](https://immediately.run). It
`provides` the `pick-color` task contract (UI_AS_APPS_SPEC §5.7): another app calls
`invokeTask('pick-color', { initial })`, the host loads this into a host-owned
overlay, and it returns the chosen color via `completeTask({ color })`.

It holds **no standing authority** — it computes over its arguments (the §5.7
invariant: data crosses, ambient authority does not). Like any binding it is
forkable (§7): fork the picker and every app that invokes `pick-color` gets yours.

```jsonc
// package.json
"immediately.run": { "provides": [{ "task": "pick-color", "version": "1.0" }] }
```
