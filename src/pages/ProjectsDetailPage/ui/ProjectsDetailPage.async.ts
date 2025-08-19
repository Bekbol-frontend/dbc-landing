import { lazy } from "react";

export const ProjectsDetailPageAsync = lazy(
  () => import("./ProjectsDetailPage")
);
