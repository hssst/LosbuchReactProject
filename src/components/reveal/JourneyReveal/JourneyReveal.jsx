import "./JourneyReveal.css";

function JourneyReveal({ losbuchResult }) {

  return (
    <section className="journey-reveal">

      <p className="journey-reveal__eyebrow">
        Der Weg des Losbuchs
      </p>

      <h3>
        Aus Name und Planet entsteht deine Zahl.
      </h3>

      <p>
        Dein Name trägt im Losbuch den Wert{" "}
        <strong>
          {losbuchResult.nameValue}
        </strong>.
      </p>

      <p>
        Dein Planet trägt den Wert{" "}
        <strong>
          {losbuchResult.planetValue}
        </strong>.
      </p>

      <p>
        Daraus ergibt sich deine Loszahl{" "}
        <strong>
          {losbuchResult.resultNumber}
        </strong>.
      </p>

      <p>
        Diese Zahl bestimmt anschließend den Weg
        durch die Tafeln des Losbuchs und führt
        zu deinem König.
      </p>

    </section>
  );
}

export default JourneyReveal;