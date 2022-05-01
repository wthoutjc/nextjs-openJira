import { createContext } from "react";

// Interfaces
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackBar: boolean) => void;
}

const EntriesContext = createContext({} as ContextProps);

export { EntriesContext };
