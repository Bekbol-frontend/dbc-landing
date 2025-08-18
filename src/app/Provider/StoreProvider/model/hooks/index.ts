import { useContext } from "react";
import { ContextProvider } from "../config";
import type { IContext } from "../types";

export const useAppContext = (): IContext => {
  return useContext(ContextProvider);
};
