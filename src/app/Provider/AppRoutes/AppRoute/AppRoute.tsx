import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { ServicesPageAsync } from "@/pages/ServicesPage";
import { routePaths } from "@/shared/config/routeConfig";
import { NotFoundPageAsync } from "@/pages/NotFoundPage";
import { ProjectsPageAsync } from "@/pages/ProjectsPage";
import { OurTeamPageAsync } from "@/pages/OurTeamPage";
import { ProjectsDetailPageAsync } from "@/pages/ProjectsDetailPage";
import { ContactPageAynsc } from "@/pages/ContactPage";

function AppRoute() {
  return (
    <Routes>
      <Route path={routePaths.Home} element={<RootLayout />}>
        <Route index element={<HomePageAsync />} />
        <Route path={routePaths.Services} element={<ServicesPageAsync />} />
        <Route path={routePaths.NotFound} element={<NotFoundPageAsync />} />
        <Route path={routePaths.Projects} element={<ProjectsPageAsync />} />
        <Route
          path={`${routePaths.Projects}/:id`}
          element={<ProjectsDetailPageAsync />}
        />
        <Route path={routePaths.Contacts} element={<ContactPageAynsc />} />
        <Route path={routePaths.OurTeam} element={<OurTeamPageAsync />} />
      </Route>
    </Routes>
  );
}

export default memo(AppRoute);
