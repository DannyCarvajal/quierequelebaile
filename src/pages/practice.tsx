// Components
import { CurrentStep, StepCard } from "@components";
// Hooks
import { useDanceGame } from "@hooks";
// Icons
import { FaAngleDown } from "react-icons/fa";

const PracticePage = () => {
  /* Hook */
  const { currStep, incomingSteps, startGame, setStartGame } = useDanceGame();

  return (
    <div className="h-container flex flex-wrap justify-center xl:flex-nowrap">
      <div className="center h-container relative w-2/3 bg-primary-blue p-24">
        <CurrentStep danceStep={currStep} startGame={startGame} />
        <button
          className={`${
            startGame ? "bg-primary-purple" : "bg-green-700"
          } btn bg-primary-purple" onClick={() => setStartGame(!startGame) absolute bottom-40 left-24 w-48`}
          onClick={() => setStartGame(!startGame)}
        >
          {startGame ? "Pausar" : "Empezar"}
        </button>
      </div>
      <div className="flex w-1/3 flex-col-reverse items-center justify-start gap-8 overflow-hidden bg-white pb-12">
        {incomingSteps?.length > 0 && <FaAngleDown className="text-xl text-dark-blue" />}
        {incomingSteps?.map((step) => (
          <StepCard key={step.id} danceStep={step} />
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
