import React from 'react';
import './App.css';
import {Renderer} from "./Renderer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Renderer text="Foo" />
        <Renderer text="Bar" />
        <Renderer text="Baz" />
      </header>
    </div>
  );
}

export default App;
