import { NavBottom } from "../../Componentes/NavBottom";
import { Header } from "../../Componentes/header";
import { ContentRecetas } from "../../Componentes/contentRecetas";
import { SearchFiltro } from "../../Componentes/searchFiltro";

function Recetas() {
  return (
    <>
      <Header title="Recetas">
        <SearchFiltro />
      </Header>
      <main>
        <ContentRecetas />
      </main>
      <NavBottom />
    </>
  );
}
export { Recetas };
