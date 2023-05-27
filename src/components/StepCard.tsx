// Vendors
import { FC } from "react";
// Types
import { DanceStep } from "@types";
import Image from "next/image";

interface Props {
  danceStep: DanceStep;
}

const StepCard: FC<Props> = ({ danceStep }) => { 
  const { name, iconURL } = danceStep || {};
  return (
    <div className="flex flex-col justify-center items-center">
    <Image
      src={iconURL}
      alt={name}
      width="70"
      height="70"
    />
    <h1 className="text-2xl font-bold">{name}</h1>
  </div>
    )
}

export default StepCard;