import "./header.css";

function TitlePage(props) {
  const { title = ""} = props;

function Header() {
  return (
    <header className="header">
      <h1 className="headerH1">{title}</h1>
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
