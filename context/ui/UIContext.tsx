import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

const UIContext = createContext({} as ContextProps);

export { UIContext };
