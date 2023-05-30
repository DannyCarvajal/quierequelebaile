// Vendors
import { useEffect, useState } from "react";
// Hooks
import { useDanceSteps } from "@hooks";
// Types
import { DanceStep } from "@types";

const generateGameSteps = (danceSteps: DanceStep[], includedLevels: number[], random = true) => {
  if (!danceSteps) return [];
  const MAX_STEPS = 15;

  const randomSteps: DanceStep[] = [];
  const allowedLevels = danceSteps?.filter((step) => includedLevels.includes(step.level));

  if (!random) return allowedLevels;

  while (randomSteps.length < MAX_STEPS) {
    const randomStep = allowedLevels[Math.floor(Math.random() * allowedLevels.length)];

    const wasRecentlyUsed = randomSteps?.slice(-3).includes(randomStep);
    const isRepeated = randomSteps?.filter((step) => step === randomStep).length > 2;
    // If this step was in the previous 3 positions, or it's more than twice in the array, skip it
    if (wasRecentlyUsed || isRepeated) {
      continue;
    }

    randomSteps.push(randomStep);
  }

  return randomSteps;
};

const useDanceGame = () => {
  /* Constants */
  const SEC_TIME_PER_STEP = 20;

  /* Initialize state */
  const { danceSteps, isLoading } = useDanceSteps();
  const [randomSteps, setRandomSteps] = useState<DanceStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [percentageCurrentStep, setPercentageCurrentStep] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);

  const currStep = randomSteps?.[currentStepIndex];
  const incomingSteps = randomSteps?.slice(currentStepIndex + 1, currentStepIndex + 4);

  /* Generate new game */
  useEffect(() => {
    if (!danceSteps || randomSteps.length) return;
    updateGame();
    //eslint-disable-next-line
  }, [danceSteps]);

  /* Update curr step */
  useEffect(() => {
    if (!startGame) return;
    const timer = setTimeout(() => {
      // If we're at the last step, reset the game
      if (currentStepIndex === randomSteps.length - 1) {
        clearTimeout(timer);
        setStartGame(false);
        return;
      }
      setCurrentStepIndex((prevStep) => prevStep + 1);
    }, SEC_TIME_PER_STEP * 1000);

    return () => clearTimeout(timer);
    //eslint-disable-next-line
  }, [currentStepIndex, startGame]);

  /* Reset game */
  useEffect(() => {
    if (startGame && randomSteps.length) return;

    setCurrentStepIndex(0);
    updateGame();
    //eslint-disable-next-line
  }, [startGame]);

  /* Update percentage */
  useEffect(() => {
    if (!startGame) return;
    setPercentageCurrentStep(0);

    const timer = setInterval(() => {
      setPercentageCurrentStep((prevPercentage) => prevPercentage + 10);
    }, (SEC_TIME_PER_STEP * 1000) / 10);

    return () => clearInterval(timer);
    //eslint-disable-next-line
  }, [currentStepIndex, startGame]);

  /* Updaters */
  const updateGame = () => {
    const allowedLevels = [0, 1, 2];
    const newGame = generateGameSteps(danceSteps, allowedLevels);
    setRandomSteps(newGame);
  };

  return { isLoading, danceSteps, currStep, percentageCurrentStep, incomingSteps, startGame, setStartGame };
};

export default useDanceGame;
