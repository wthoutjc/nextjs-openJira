import { PropsWithChildren, useReducer, useState } from "react";
import { UIContext } from "./UIContext";

// Reducer
import { uiReducer } from "./uiReducer";

// Types
import { UITypes } from "./types";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

const UIProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  const openSideMenu = () => {
    dispatch({
      type: UITypes.open,
      payload: {
        sideMenuOpen: true,
        isAddingEntry,
        isDragging: false,
      },
    });
  };

  const closeSideMenu = () => {
    dispatch({
      type: UITypes.close,
      payload: {
        sideMenuOpen: false,
        isAddingEntry,
        isDragging: false,
      },
    });
  };

  const startDragging = () => {
    dispatch({ type: UITypes.startDragging });
  };

  const endDragging = () => {
    dispatch({ type: UITypes.endDragging });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        isAddingEntry,
        setIsAddingEntry,
        openSideMenu,
        closeSideMenu,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider };
