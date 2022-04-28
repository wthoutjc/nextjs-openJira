type EntryStatus = "pending" | "in-progress" | "finished";

interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export { Entry, EntryStatus };
