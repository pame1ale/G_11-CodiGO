import header from './img/header.png';
import './App.css';


h1 = {
  fontSize: 48,
  fontWeight: 'bold',
}

main{
  margin: 8px;

}
header = {
  background-image: url("header.png");
  width: 100%;
  height: 538px;
}
 Hh1 ={
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
titulo = {
  margin: 20px 0;
}



function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={header} className="App-header" alt="header" />
        </header>
        <main>
          <div class="easy">
            <div class="titulo">
              <h1  style = {this.h1}>Fácil</h1>
              <a href="#">Ver</a>
            </div>
            <div class="boxes">
              <div class="box">
                <h1  style = {this.h1}>Name Quiz</h1>
                <p>Description</p>
              </div>
              <div class="box">
                <h1  style = {this.h1}>Name Quiz</h1>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div class="intermediate">
            <div class="titulo">
            <h1  style = {this.h1}>Intermedio</h1>
              <a href="#">Ver</a>
            </div>
            <div class="box">
            <h1  style = {this.h1}> Name quizz</h1>
                <p>Description</p>
              </div>
              <div class="box">
              <h1  style = {this.h1}> Name quizz</h1>
                <p>Description</p>
              </div>
          </div>
          <div class="hard">
            <div class="titulo">
            <h1  style = {this.h1}>Difícil</h1>
              <a href="#">Ver</a>
            </div>
            <div class="box">
              <h1  style = {this.h1}> Name quizz</h1>
                <p>Description</p>
              </div>
              <div class="box">
                <h1  style = {this.h1}> Name quizz</h1>
                <p>Description</p>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
