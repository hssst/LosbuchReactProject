import "./HomePage.css";

function HomePage({ onStart }) {
  return (
    <main className="home-page">
      <section className="home-page__intro">
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
