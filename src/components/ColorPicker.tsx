// The pick-color task callee (UI_AS_APPS_SPEC §5.7). Reads the invocation params
// via `useTaskInput()` (the caller's `initial` color, untrusted but harmless), and
// returns the chosen color to the caller via `completeTask({ color })`. `cancelTask`
// aborts — though the host always owns dismiss (T28), so the overlay's Escape/close
// work even if this code never calls it.
import { useTaskInput, completeTask, cancelTask } from "@immediately-run/sdk";
import "./ColorPicker.css";

// A small, friendly default palette.
const SWATCHES = [
  "#ef4444", "#f97316", "#f59e0b", "#eab308",
  "#84cc16", "#22c55e", "#10b981", "#14b8a6",
  "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6",
  "#a855f7", "#d946ef", "#ec4899", "#f43f5e",
  "#64748b", "#1e293b", "#ffffff", "#000000",
];

const asString = (v: unknown, fallback: string): string =>
  typeof v === "string" ? v : fallback;

export default function ColorPicker() {
  const input = useTaskInput();
  const initial = asString(input?.params.initial, "#3b82f6");

  return (
    <div className="cp">
      <header className="cp-hd">
        <span className="cp-title">Pick a color</span>
        <span className="cp-current" aria-label={`current color ${initial}`}>
          <span className="cp-chip" style={{ background: initial }} />
          <code>{initial}</code>
        </span>
      </header>

      <div className="cp-grid" role="listbox" aria-label="Colors">
        {SWATCHES.map((c) => (
          <button
            key={c}
            type="button"
            role="option"
            aria-selected={c.toLowerCase() === initial.toLowerCase()}
            className="cp-swatch"
            style={{ background: c }}
            title={c}
            aria-label={c}
            onClick={() => completeTask({ color: c })}
          />
        ))}
      </div>

      <footer className="cp-foot">
        <button type="button" className="cp-cancel" onClick={() => cancelTask()}>
          Cancel
        </button>
        <button
          type="button"
          className="cp-keep"
          onClick={() => completeTask({ color: initial })}
        >
          Keep {initial}
        </button>
      </footer>
    </div>
  );
}
