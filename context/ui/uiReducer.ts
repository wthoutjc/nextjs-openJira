import { UIState } from "./UIProvider";

// Types
import { PayloadSidebar } from "./types";

type UIActionType = {
  type: PayloadSidebar;
  payload: UIState;
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case PayloadSidebar.open:
      return {
        ...state,
        sideMenuOpen: true,
      };
    case PayloadSidebar.close:
      return {
        ...state,
        sideMenuOpen: false,
      };
    default:
      return state;
  }
};
