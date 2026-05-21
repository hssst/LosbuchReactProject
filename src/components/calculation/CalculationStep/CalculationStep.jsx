import "./CalculationStep.css";

function CalculationStep({ label, value }) {
  return (
    <div className="calculation-step">
      <span className="calculation-step__label">
        {label}
      </span>

      <span className="calculation-step__value">
        {value}
      </span>
    </div>
  );
}

export default CalculationStep;
