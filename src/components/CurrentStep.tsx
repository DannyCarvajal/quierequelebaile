// Vendor
import { FC } from "react";
import Image from "next/image";
// Types
import { DanceStep } from "@types";

interface Props {
  danceStep: DanceStep;
}

const CurrentStep: FC<Props> = ({ danceStep }) => {
  const { name, iconURL } = danceStep || {};

  return (
    <div className="h-container max-w-4xl">
      <p>{name}</p>
      <Image src={iconURL} alt="step" width="300" height="300" />
    </div>
  );
};

export default CurrentStep;