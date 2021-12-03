import { NavBottom } from "../../Componentes/NavBottom";
import { Header } from "./header";
import { Content } from "./content";
import "./RecetasFiltros.css";

function RecetasFiltros() {
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
export {RecetasFiltros};