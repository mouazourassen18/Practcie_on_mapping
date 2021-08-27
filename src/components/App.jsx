import React from "react";
import Detail from "./Detail";
import emojipedia from "/src/emojipedia";

function emojiMap(pro) {
  return (
    <Detail
      key={pro.id}
      emoji={pro.emoji}
      name={pro.name}
      meaning={pro.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      ;{emojipedia.map(emojiMap)}
    </div>
  );
}
export default App;
