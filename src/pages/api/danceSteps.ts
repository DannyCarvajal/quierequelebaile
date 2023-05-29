// Vendors
import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function danceSteps(req: NextApiRequest, res: NextApiResponse) {
  try {
    /* Validation */
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const steps = await prisma.danceStep.findMany();
    res.status(200).json(steps);
  } catch (err) {
    console.error(err);
  }
}
