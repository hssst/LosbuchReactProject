import "./Navigation.css";

function Navigation({
  currentPage,
  onGoHome,
  onGoLosbuch,
  onGoResult
}) {
  /*return (
    <nav className="navigation">
      <button
        type="button"
        onClick={onGoHome}
        className={currentPage === "home" ? "navigation__button navigation__button--active" : "navigation__button"}
      >
        Start
      </button>

      <button
        type="button"
        onClick={onGoLosbuch}
        className={currentPage === "losbuch" ? "navigation__button navigation__button--active" : "navigation__button"}
      >
        Losbuch
      </button>

      <button
        type="button"
        onClick={onGoResult}
        className={currentPage === "result" ? "navigation__button navigation__button--active" : "navigation__button"}
      >
        Ergebnis
      </button>
    </nav>
  );*/
}

export default Navigation;
