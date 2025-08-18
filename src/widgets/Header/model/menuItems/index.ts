import { routePaths } from "@/shared/config/routeConfig";
import type { IMenuItem } from "../types";

export const menuItems: IMenuItem[] = [
  { name: "Home page", path: routePaths.Home },
  { name: "Services", path: routePaths.Services },
  { name: "Projects ", path: routePaths.Projects },
  { name: "Our team", path: routePaths.OurTeam },
  { name: "Contacts", path: routePaths.Contacts },
];
