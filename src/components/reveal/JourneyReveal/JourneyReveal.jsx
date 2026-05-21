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
        Das Losbuch führt dich weiter durch seine Tafeln.
      </p>

      <p>
        Am Ende wartet:{" "}
        <strong>{losbuchResult.result?.king}</strong>.
      </p>
    </section>
  );
}

export default JourneyReveal;
