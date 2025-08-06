import { routePaths } from "@/shared/config/routeConfig";
import type { IMenuItem } from "../types";

export const menuItems: IMenuItem[] = [
  { name: "Bosh sahifa", path: routePaths.Home },
  { name: "Xizmatlar", path: routePaths.Services },
  { name: "Loyihalar ", path: routePaths.Projects },
  { name: "Bizning jamoa", path: routePaths.OurTeam },
  { name: "Kontaktlar", path: routePaths.Contacts },
];
