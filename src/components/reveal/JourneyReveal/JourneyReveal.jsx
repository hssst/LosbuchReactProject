import "./JourneyReveal.css";

function JourneyReveal({ losbuchResult }) {
  return (
    <section className="journey-reveal">
      <p className="journey-reveal__eyebrow">
        Der Weg des Losbuchs
      </p>

      <h3>
        Die Zahl {losbuchResult.resultNumber} öffnet den Weg.
      </h3>

      <p>
        Das Losbuch folgt seiner verborgenen Ordnung und führt dich weiter.
      </p>

      <p>
        Hinter den Tafeln wartet die letzte Station deiner Weissagung.
      </p>
    </section>
  );
}

export default JourneyReveal;
