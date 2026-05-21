import "./CalculationView.css";

import CalculationStep from "../CalculationStep/CalculationStep";
import NameValueBreakdown from "../NameValueBreakdown/NameValueBreakdown";

function CalculationView({ losbuchResult }) {
  const total =
    losbuchResult.nameValue + losbuchResult.planetValue;

  return (
    <section className="calculation-view">
      <h3>Der Rechenweg des Losbuchs</h3>

      <p>
        Das Losbuch verbindet deinen Namen mit dem Wert des regierenden Planeten.
      </p>

      <NameValueBreakdown
        name={losbuchResult.name}
      />

      <CalculationStep
        label="Namenswert"
        value={losbuchResult.nameValue}
      />

      <CalculationStep
        label="Planetenwert"
        value={losbuchResult.planetValue}
      />

      <CalculationStep
        label="Summe"
        value={total}
      />

      <p>
        {total} wird nach der Regel des Losbuchs durch 9 reduziert.
      </p>

      <p>
        Wenn kein Rest bleibt, gilt die Zahl 9.
      </p>

      <CalculationStep
        label="Ergebniszahl"
        value={losbuchResult.resultNumber}
      />
    </section>
  );
}

export default CalculationView;
