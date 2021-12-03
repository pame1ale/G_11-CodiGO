import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="box-SearchFiltros">
        <div className="search">
            <input type="search" className="inputSearch" placeholder="search"/>
            <i className="icon-search"><span className="material-icons-outlined">search</span></i>
        </div>
      <button className="btnFiltros">Filtros</button>
      </div>
    </header>
  );
}
export { Header };
