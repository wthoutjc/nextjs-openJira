// Types
import { EntriesState } from "./";
import { entriesTypes } from "./";

type actionEntries = {
  type: entriesTypes;
  payload: any;
};

const entriesReducer = (
  state: EntriesState,
  action: actionEntries
): EntriesState => {
  switch (action.payload) {
    case entriesTypes.hola:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export { entriesReducer };
