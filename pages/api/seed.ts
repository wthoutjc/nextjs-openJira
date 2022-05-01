import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from "../../database";

// Models
import { Entry } from "../../models";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Not access to this endpoint" });
  }

  await db.connect();

  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({ message: "Proccess done successfully" });
};

export default handler;
