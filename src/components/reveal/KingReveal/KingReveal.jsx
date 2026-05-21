import "./KingReveal.css";

function KingReveal({ losbuchResult }) {
  return (
    <section className="king-reveal">
      <p className="king-reveal__eyebrow">
        Die letzte Station
      </p>

      <h3>
        {losbuchResult.result?.king}
      </h3>

      <p>
        Dieser König öffnet den Losspruch für deine Frage.
      </p>
    </section>
  );
}

export default KingReveal;
