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
  const shortId = "d3Tek5GJGuo";

  return (
    <div className="mx-auto mt-8 max-w-[90%] p-4">
      {stepsByLevel.map((steps, index) => {
        const currLevel = LEVELS[steps?.[0].level];
        return (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold">{firstLetterToUpperCase(currLevel)}</h2>
            <div className="mt-8 grid grid-cols-1 justify-items-center gap-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              {steps?.map((step) => (
                <div key={step.id} className="min-h-70 relative flex h-[320px] w-[200px] flex-col rounded-md bg-gray-500">
                  <Image
                    src={step.iconURL}
                    alt={step.name}
                    width="60"
                    height="60"
                    className="absolute left-[-25px] top-[-25px] z-10 rounded-full object-cover"
                  />
                  {/* Youtube video */}
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${shortId}?showinfo=0`}
                    title={step.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute left-0 top-0 rounded-md"
                  ></iframe>
                  <p className="absolute bottom-[-40px] left-1/2 w-max -translate-x-1/2 transform text-lg font-medium">{step.name}</p>
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
