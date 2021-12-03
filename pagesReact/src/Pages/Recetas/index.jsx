import { NavBottom } from "../../Componentes/NavBottom";
import { Header } from "../../Componentes/header";
import { ContentRecetas } from "../../Componentes/contentRecetas";
import "./recetas.css";

function Recetas() {
  return (
      <><Header 
        title="Quzz"
      />
      <main>
          <ContentRecetas />
      </main><NavBottom />
      </>
  );
}
export {Recetas};