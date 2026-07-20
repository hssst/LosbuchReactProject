import "./HomePage.css";
import background from "../../assets/Homepage/background.svg";
import title from "../../assets/Homepage/title.svg";
import text_openBook from "../../assets/Homepage/text_openBook.png";
import fleck from "../../assets/Homepage/fleck.png";

function HomePage({ onStart, onGoLosbuch }) {
  
  
  return (
    <main className="home-page">
      <section className="home-page__intro">

      <img className="background" src={background} alt="Hintergrund"/>
      <img className="title" src={title} alt="Geomantia-Losbuch" />
      <img className="text_openBook" src={text_openBook} alt="Zum Losbuch" onClick={onGoLosbuch} />
      <img className="fleck" src={fleck} alt="" />

        <h1>Geomantia-Losbuch</h1>

        <p>
          Eine digitale Losbuch-Erfahrung nach Peter Jordan.
        </p>

        <button type="button" onClick={onStart}>
          Los starten
        </button>
      </section>
    </main>
  );
}

export default HomePage;
