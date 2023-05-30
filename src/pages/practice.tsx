// Components
import { CurrentStep, StepCard, Loader } from "@components";
// Hooks
import { useDanceGame } from "@hooks";
// Icons
import { FaAngleDown } from "react-icons/fa";

const PracticePage = () => {
  /* Hook */
  const { currStep, isLoading, incomingSteps, percentageCurrentStep, startGame, setStartGame } = useDanceGame();

  return (
    <div className="h-container flex flex-wrap justify-center xl:flex-nowrap">
      <div className="center h-container relative w-full bg-primary-blue p-8 md:p-16 lg:p-24 xl:w-2/3">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            <CurrentStep danceStep={currStep} startGame={startGame} />
            <button
              className={`${
                startGame ? "bg-primary-purple" : "bg-green-700"
              } btn start-button absolute bottom-8 left-8 w-32 bg-primary-purple md:bottom-12 md:left-12 md:w-40 lg:bottom-40 lg:left-24 lg:w-48`}
              onClick={() => setStartGame(!startGame)}
            >
              <p className="relative z-10">{startGame ? "Pausar" : "Empezar"}</p>
              {/* Progress bar */}
              {startGame && (
                <div
                  className="absolute bottom-0 left-0 top-2 h-8 rounded-lg bg-slate-700"
                  style={{ width: `${percentageCurrentStep}%` }}
                />
              )}
            </button>
          </>
        )}
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-4 overflow-hidden bg-white pb-8 md:gap-6 md:pb-12 lg:gap-8 xl:w-1/3">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {incomingSteps?.length > 0 && <FaAngleDown className="text-xl text-dark-blue md:text-2xl lg:text-3xl" />}
            {incomingSteps?.map((step) => (
              <StepCard key={step.id} danceStep={step} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PracticePage;
