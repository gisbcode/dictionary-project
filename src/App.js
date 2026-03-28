import React from "react";
import axios from "axios";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>React Dictionary Project</h1>
      <Dictionary />
      <p></p>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/gisbcode" target="_blank" rel="noreferrer">
          Giovanna Bellon
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/gisbcode/reactfinalapp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://reactdictionarybygio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
  
