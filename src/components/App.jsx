import React from "react";
import Entry from "./Entry";
import emojipedias from "../emojipedias";

function CreateEmoji(emojipedia) {
  return<Entry 
  key={emojipedia.id}
  emoji={emojipedia.emoji}
  emojitext={emojipedia.name}
  emojides={emojipedia.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
       <dl className="dictionary">
        {emojipedias.map(CreateEmoji)}
      </dl> 
    </div>
  );
}

export default App;
