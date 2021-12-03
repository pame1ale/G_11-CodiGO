import "./NavBottom.css";
function NavBottom() {
  return (
    <div className="bottom-top">
      <a className="btna" href="#">
        <span className="material-icons-outlined">
          <p>quiz</p>
        </span>
        Quizz
      </a>
      <a className="btna" href="#">
        <span class="material-icons-outlined">
          <p>quiz</p>
        </span>
        Recetas
      </a>
      <a className="btna" href="#">
        <span class="material-icons-outlined">favorite_border</span>
        <p>Favourit</p>
      </a>
    </div>
  );
}

export { NavBottom };
