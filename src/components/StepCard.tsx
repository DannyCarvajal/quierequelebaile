// Vendors
import { FC } from "react";
// Types
import { DanceStep } from "@types";
import Image from "next/image";
// Constants
import { LEVELS } from "@utils/constants";

interface Props {
  danceStep: DanceStep;
}

const StepCard: FC<Props> = ({ danceStep }) => {
  const { name, level, iconURL } = danceStep || {};
  return (
    <div className="center card-shadow relative h-[140px] min-h-[140px] w-[90%] max-w-[400px] justify-start gap-4 rounded-[20px] p-4">
      <Image src={iconURL} alt={name} width="70" height="70" className="ml-4 rounded-full" />
      <div>
        <h1 className="text-xl font-bold text-dark-blue">{name}</h1>
        <p className="absolute bottom-4 right-4 text-base font-bold italic text-dark-blue text-primary-gray">{LEVELS[level]}</p>
      </div>
    </div>
  );
};

export default StepCard;
