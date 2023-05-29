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
      <div className="center h-container relative w-full bg-primary-blue p-8 md:p-16 lg:p-24 xl:w-2/3">
        <CurrentStep danceStep={currStep} startGame={startGame} />
        <button
          className={`${
            startGame ? "bg-primary-purple" : "bg-green-700"
          } btn bg-primary-purple" onClick={() => setStartGame(!startGame) absolute bottom-8 left-8 w-32 md:bottom-12 md:left-12 md:w-40 lg:bottom-16 lg:left-24 lg:w-48`}
          onClick={() => setStartGame(!startGame)}
        >
          {startGame ? "Pausar" : "Empezar"}
        </button>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-start gap-4 overflow-hidden bg-white pb-8 md:gap-6 md:pb-12 lg:gap-8 xl:w-1/3">
        {incomingSteps?.length > 0 && <FaAngleDown className="text-xl text-dark-blue md:text-2xl lg:text-3xl" />}
        {incomingSteps?.map((step) => (
          <StepCard key={step.id} danceStep={step} />
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
