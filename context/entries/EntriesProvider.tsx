import { PropsWithChildren, useReducer } from "react";
import { entriesReducer } from "./entriesReducer";

// Context
import { EntriesContext } from "./EntriesContext";

// Interfaces
import { Entry } from "../../interfaces";
import { entriesTypes } from "./types";

// uuid
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Esto es un texto de excelente calidad y desempeño",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En progreso: Esto es un texto2 de excelente calidad y desempeño",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Terminado: Esto es un texto3 de excelente calidad y desempeño",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

const EntriesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: entriesTypes.addEntry, payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: entriesTypes.updateEntry, payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};

export { EntriesProvider };
