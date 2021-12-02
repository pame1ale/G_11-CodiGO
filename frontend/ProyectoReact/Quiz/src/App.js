import React from "react";
import { NavBottom } from "./Componentes/NavBottom";
import { Header } from "./Componentes/header";
import { Content } from "./Componentes/content";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
      </main>
      <NavBottom />
    </div>
  );
}
export default App;