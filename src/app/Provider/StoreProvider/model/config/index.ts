import { createContext } from "react";
import type { IContext } from "../types";

export const ContextProvider = createContext<IContext>(null!);
