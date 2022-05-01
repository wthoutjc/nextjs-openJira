import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";

import { Entry } from "../../../models";
import { Entry as IEntry } from "../../../interfaces";

type Data = { message: string } | IEntry[] | IEntry;

enum Method {
  post = "POST",
  get = "GET",
  put = "PUT",
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case Method.get:
      return getEntries(res);
    case Method.post:
      return postEntry(req, res);
    case Method.put:
      return 
    default:
      res.status(400).json({ message: "Not found endpoint" });
  }
};

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: "ascending" });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = "" } = req.body;

  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();

    await newEntry.save();

    await db.disconnect();

    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();
    console.error(error);
    return res.status(500).json({
      message: "Something wrong happened, please contact with support :(",
    });
  }
};

export default handler;
