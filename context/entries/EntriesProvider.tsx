import { PropsWithChildren, useEffect, useReducer } from "react";
import { entriesReducer } from "./entriesReducer";

// Context
import { EntriesContext } from "./EntriesContext";

// Interfaces
import { Entry } from "../../interfaces";
import { entriesTypes } from "./types";

// Api
import { entriesApi } from "../../apis";

// Notifications
import { useSnackbar } from "notistack";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: entriesTypes.loadEntries, payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: entriesTypes.addEntry, payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackBar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({
        type: entriesTypes.updateEntry,
        payload: data,
      });

      if (showSnackBar) {
        enqueueSnackbar("Entry updated successfully", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};

export { EntriesProvider };
