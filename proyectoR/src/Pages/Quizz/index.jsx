import { NavBottom } from "../../Componentes/NavBottom";
import { Header } from "../../Componentes/header";
import { Content } from "../../Componentes/content";
import "./quizz.css";

function Quizz() {
  return (
    <>
      <Header title="Quizz" />
      <main>
        <Content />
      </main>
      <NavBottom />
    </>
  );
}
export { Quizz };
