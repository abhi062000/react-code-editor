import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container`}>
      <div className="editor-title">{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "dracula",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
