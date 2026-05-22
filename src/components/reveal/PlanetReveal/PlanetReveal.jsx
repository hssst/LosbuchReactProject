import "./PlanetReveal.css";

import { planetLabels } from "../../../data/planets/planetLabels";

function PlanetReveal({ losbuchResult }) {
  const planetLabel =
    planetLabels[losbuchResult.planet] ??
    losbuchResult.planet;

  return (
    <section className="planet-reveal">
      <p className="planet-reveal__eyebrow">
        Die Stunde ist bestimmt.
      </p>

      <h3>
        Du wirst von {planetLabel} regiert.
      </h3>

      <p>
        Du hast{" "}
        <strong>{losbuchResult.weekday}</strong>,{" "}
        <strong>{losbuchResult.dayPhase}</strong> und die{" "}
        <strong>{losbuchResult.hour}. Stunde</strong>{" "}
        gewählt.
      </p>

      <p>
        Diese Planetenstunde wird von{" "}
        <strong>{planetLabel}</strong> regiert.
      </p>

      <p>
        {planetLabel} trägt im Losbuch den Wert{" "}
        <strong>{losbuchResult.planetValue}</strong>.
      </p>
    </section>
  );
}

export default PlanetReveal;
