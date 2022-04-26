import { PropsWithChildren, useReducer } from "react";
import { UIContext } from "./UIContext";

// Reducer
import { uiReducer } from "./uiReducer";

// Types
import { PayloadSidebar } from "./types";

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

const UIProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({
      type: PayloadSidebar.open,
      payload: {
        sideMenuOpen: true,
      },
    });
  };

  const closeSideMenu = () => {
    dispatch({
      type: PayloadSidebar.close,
      payload: {
        sideMenuOpen: false,
      },
    });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider };
