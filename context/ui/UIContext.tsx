import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  setIsAddingEntry: (boolean: boolean) => void;
  
  startDragging: () => void;
  endDragging: () => void;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

const UIContext = createContext({} as ContextProps);

export { UIContext };
