import { useContext } from "react";
import { ContextProvider } from "../config";
import type { IFooter } from "@/widgets/Footer";

export const useAppContext = (): IFooter => {
  return useContext(ContextProvider);
};
