// Types
import { EntriesState } from "./";
import { entriesTypes } from "./";

// Interfaces
import { Entry } from "../../interfaces";

type ActionProps =
  | {
      type: entriesTypes;
      payload: Entry;
    }
  | {
      type: entriesTypes.loadEntries;
      payload: Entry[];
    };

const entriesReducer = (
  state: EntriesState,
  action: ActionProps
): EntriesState => {
  switch (action.type) {
    case entriesTypes.addEntry:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case entriesTypes.updateEntry:
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case entriesTypes.loadEntries:
      return {
        ...state,
        entries: [...(action.payload as Entry[])],
      };
    default:
      return {
        ...state,
      };
  }
};

export { entriesReducer };
