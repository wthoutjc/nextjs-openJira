import { createContext } from "react";

// Interfaces
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
}

const EntriesContext = createContext({} as ContextProps);

export { EntriesContext };
