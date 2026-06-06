// net:fetch live test — immediately.run renders this default export. Calls the
// SDK hostFetch (§5.11) against the manifest-declared + consented host.
import { useEffect, useState } from "react";
import { hostFetch } from "@immediately-run/sdk";

export default function App() {
  const [out, setOut] = useState("loading…");
  useEffect(() => {
    hostFetch("https://api.github.com/zen")
      .then((r) => setOut(`OK status ${r.status}: ${r.body}`))
      .catch((e) => setOut(`ERROR [${e.code}]: ${e.message}`));
  }, []);
  return (
    <div style={{ fontFamily: "system-ui", padding: 24, fontSize: 18, color: "#e6e6e6" }}>
      <h1>net:fetch test</h1>
      <pre data-testid="result" style={{ whiteSpace: "pre-wrap" }}>{out}</pre>
    </div>
  );
}
