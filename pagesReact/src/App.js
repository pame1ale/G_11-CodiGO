import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Quizz} from "./Pages/Quizz";
import { Recetas } from "./Pages/Recetas";
import { Recetasfiltros} from "./Pages/Recetasfiltros";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Quizz">
            <Quizz />
          </Route>
          <Route path="/Recetas">
            <Recetas />
          </Route>
          <Route path="/Recetasfiltros">
            <Recetasfiltros />
          </Route>
        </Switch>
      </Router>
  );
}
export default App;