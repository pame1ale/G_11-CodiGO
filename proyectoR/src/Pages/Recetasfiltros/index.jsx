import { NavBottom } from "../../Componentes/NavBottom";
import { ContentRecetasFiltros } from "../../Componentes/contentRecetafiltro";
import { SearchFiltro } from "../../Componentes/searchFiltro";

import "./RecetasFiltros.css";

function RecetasFiltro() {
  return (
    <div className="App">
      <header className="header">
        <SearchFiltro />
      </header>
      <main>
        <ContentRecetasFiltros />
      </main>
      <NavBottom />
    </div>
  );
}
export { RecetasFiltro };
