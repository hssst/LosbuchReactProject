import "./ProgressIndicator.css";

function ProgressIndicator({
  steps,
  currentStep
}) {
  return (
    <div className="progress-indicator">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={step.title}
            className={
              "progress-indicator__item " +
              (isActive
                ? "progress-indicator__item--active"
                : "") +
              " " +
              (isCompleted
                ? "progress-indicator__item--completed"
                : "")
            }
          >
            <div className="progress-indicator__circle">
              {isCompleted ? "●" : "○"}
            </div>

            <span>
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressIndicator;
