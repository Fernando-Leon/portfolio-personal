import React from 'react';
export default function Editor({ code }) {
  const codeLines = code.split('\n');

  return (
    <div className="code-editor">
      <pre className="code">
        {codeLines.map((line, index) => (
          <div key={index} className="code-line">
            <span className="line-number">{index + 1}</span>
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
}
