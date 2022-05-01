import mongoose from "mongoose";
import { db } from ".";

// Database
import { Entry } from "../models";

//Interface
import { Entry as IEntry } from "../interfaces";

const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!mongoose.isValidObjectId(id)) return null;
  try {
    await db.connect();

    const entry = await Entry.findById(id).lean();

    await db.disconnect();
    return JSON.parse(JSON.stringify(entry));
  } catch (error) {
    console.error(error);
    await db.disconnect();
    return null;
  }
};
export { getEntryById };
