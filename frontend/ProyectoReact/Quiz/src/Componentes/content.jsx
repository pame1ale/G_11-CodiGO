import "./content.css";

function Content() {
  return (
    <>
      <div className="easy">
        <div className="titulo">
          <h1 className= "h1">Fácil</h1>
          <a className="titulo_a">Ver</a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
             <h2 className= "h2"> Name Quizz</h2>
              <p className="P">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 className= "h2"> Name Quizz</h2>
              <p  className= "p">Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intermediate">
        <div className="titulo">
          <h1 className= "h1">Intermedio</h1>
          <a className="titulo_a">Ver</a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
              <h2 className= "h2"> Name Quizz</h2>
              <p  className= "p">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2  className= "h2"> Name Quizz</h2>
              <p  className= "p">Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hard">
        <div className="titulo">
          <h1 className= "h1">Difícil</h1>
          <a className="titulo_a" href="#">Ver</a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
              <h2 className= "h2"> Name Quizz</h2>
              <p className= "p">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 className= "h2"> Name Quizz</h2>
              <p className= "p">Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Content };
