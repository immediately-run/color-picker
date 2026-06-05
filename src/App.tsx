// Root component — immediately.run renders the default export of THIS file.
// The Phase-09 pilot TASK app: it `provides` the `pick-color` contract (§5.7).
// It is loaded ONLY into a host-owned overlay when another app
// `invokeTask('pick-color', …)`s it, reads its params via the SDK, and returns a
// color with `completeTask`. It holds NO standing authority — it computes over its
// arguments (the §5.7 invariant: data crosses, ambient authority does not).
import "./index.css";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
  return <ColorPicker />;
}

export default App;
