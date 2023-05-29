// Vendor
import { FC } from "react";
import Image from "next/image";
// Types
import { DanceStep } from "@types";
// Constants
import { LEVELS } from "@utils/constants";

interface Props {
  danceStep: DanceStep;
  startGame: boolean;
}

const CurrentStep: FC<Props> = ({ danceStep, startGame }) => {
  const { name, iconURL, level } = danceStep || {};

  return (
    <div
      className={`${
        !startGame && "blur-sm"
      } relative h-full w-full max-w-4xl border-r-[0.5px] border-t-[0.5px] border-amber-50 border-t-white`}
    >
      <h2 className="mt-20 max-w-lg text-[120px] font-bold leading-none">{name}</h2>
      {iconURL && <Image src={iconURL} className="absolute right-[-40px] top-[-40px] rounded-full" alt="step" width="150" height="150" />}
      {typeof level === "number" && (
        <p className="absolute bottom-4 right-4 text-4xl font-bold italic text-shadow-white">{LEVELS[level]}</p>
      )}
    </div>
  );
};

export default CurrentStep;
