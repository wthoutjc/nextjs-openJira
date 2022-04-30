import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "Example" });
};

export default handler;
