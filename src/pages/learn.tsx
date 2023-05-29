// Vendors
import Image from "next/image";
// Hooks
import { useDanceGame } from "@hooks";
// Utils
import { LEVELS } from "@utils/constants";
import { firstLetterToUpperCase } from "@utils/functions";

const LearnPage = () => {
  const { danceSteps } = useDanceGame();

  // Group steps by level
  const levels = [0, 1, 2];
  const stepsByLevel = levels.map((level) => danceSteps?.filter((step) => step.level === level));

  return (
    <div className="mx-auto mt-8 max-w-[90%] p-4">
      {stepsByLevel.map((steps, index) => {
        const currLevel = LEVELS[steps?.[0].level];
        return (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold">{firstLetterToUpperCase(currLevel)}</h2>
            <div className="mt-8 grid grid-cols-3 justify-items-center gap-8">
              {steps?.map((step) => (
                <div key={step.id} className="min-h-70 relative flex h-[320px] min-w-[200px]  rounded-md bg-gray-500">
                  <Image
                    src={step.iconURL}
                    alt={step.name}
                    width="60"
                    height="60"
                    className="absolute left-[-25px] top-[-25px] rounded-full object-cover"
                  />
                  <p className="text-md absolute bottom-[-40px] left-1/2 w-max -translate-x-1/2 transform font-medium">{step.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LearnPage;
