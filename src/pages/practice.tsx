// Vendors
import Image from "next/image";
// Components
import { CurrentStep, StepCard } from "@components";
// Hooks
import { useDanceGame } from "@hooks";
// Types
import { DanceStep } from "@types";

const PracticePage = () => {
  /* Hook */
  const { currStep, currentStepIndex, randomSteps } = useDanceGame();

  return (
    <div className="flex justify-center h-container">
      <div className="flex justify-center items-center">
        <CurrentStep danceStep={currStep}/>
        <div className="flex flex-col-reverse justify-center">
          {Array.from([1, 2, 3]).map((_, index) => { 
            const step = randomSteps[currentStepIndex + index + 1];
            return step? <StepCard key={step?.id || index} danceStep={step} /> : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
