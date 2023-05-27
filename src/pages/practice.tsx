// Vendors
import Image from "next/image";
// Hooks
import { useDanceSteps } from "@hooks";

const PracticePage = () => {
  /* Initialize state */
  const { danceSteps } = useDanceSteps();

  return (
      <div className="flex justify-center">
        Game page
        <ul>
          {danceSteps?.map((step) => (
            <li key={step.id}>
              {step.name}
              {step?.iconURL && (
                <div>
                  <Image width="150" className="rounded-full object-cover" height="150" src={step.iconURL} alt={step.name} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default PracticePage;
