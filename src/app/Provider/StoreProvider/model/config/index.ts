import type { IFooter } from "@/widgets/Footer";
import { createContext } from "react";

export const ContextProvider = createContext<IFooter>(null!);
