import { UIState } from "./UIProvider";

// Types
import { UITypes } from "./types";

type UIActionType = {
  type: UITypes;
  payload?: UIState;
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case UITypes.open:
      return {
        ...state,
        sideMenuOpen: true,
      };
    case UITypes.close:
      return {
        ...state,
        sideMenuOpen: false,
      };
    case UITypes.startDragging:
      return {
        ...state,
        isDragging: true,
      };
    case UITypes.endDragging:
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
