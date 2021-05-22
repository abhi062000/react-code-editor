import { useState, useEffect } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
      `);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
  return (
    <div className="pane">
      {/* top-pane */}
      <div className="top-pane">
        <CodeEditor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        ></CodeEditor>
        <CodeEditor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        ></CodeEditor>
        <CodeEditor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJs}
        ></CodeEditor>
      </div>

      {/* bottom pane */}
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          width="100%"
          height="100%"
          title="output"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
