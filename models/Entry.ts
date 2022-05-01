import mongoose, { Model, Schema } from "mongoose";

// Interfaces
import { Entry } from "../interfaces";

const ENUM_ENTRY_SCHEMA = ["pending", "in-progress", "finished"];

const EntrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    // enum: ENUM_ENTRY_SCHEMA,
    enum: {
      values: ENUM_ENTRY_SCHEMA,
      message: "{VALUE} is not a valid access",
    },
    default: "pending",
  },
});

const EntryModel: Model<Entry> =
  mongoose.models.Entry || mongoose.model("Entry", EntrySchema);

export default EntryModel;
