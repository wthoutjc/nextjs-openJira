import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

// Database
import { db } from "../../../../database";
import { Entry } from "../../../../models";

// Interface
import { Entry as IEntry } from "../../../../interfaces";

type Data =
  | {
      message: string;
    }
  | IEntry;

enum Method {
  post = "POST",
  get = "GET",
  put = "PUT",
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `${id} is not valid id` });
  }

  switch (req.method) {
    case Method.put:
      return updateEntry(req, res);
    case Method.get:
      return getEntry(req, res);
    default:
      return res.status(400).json({ message: `Method not exists` });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await db.connect();

  const entry = await Entry.findById(id);
  await db.disconnect();

  if (!entry) {
    return res.status(400).json({ message: "Not result found" });
  }

  return res.status(200).json(entry)
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "Not result found" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  /**
   * entryToUpdate.description = description
   * entryToUpdate.status = status
   * await entryToUpdate.save()
   *
   * Este método es más rápido (servidor) pero menos escalable
   */

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    return res.status(200).json(updatedEntry!);
  } catch (error: any) {
    console.error(error);
    await db.disconnect();
    return res.status(400).json({ message: error.errors.status.message });
  }
};

export default handler;
