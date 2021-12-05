import "./searchFiltro.css";

function SearchFiltro() {
  return (
    <div className="box-SearchFiltros">
      <div className="search">
        <input type="search" className="inputSearch" placeholder="search" />
        <i className="icon-search">
          <span className="material-icons-outlined">search</span>
        </i>
      </div>
      <button className="btnFiltros">Filtros</button>
    </div>
  );
}
export { SearchFiltro };
