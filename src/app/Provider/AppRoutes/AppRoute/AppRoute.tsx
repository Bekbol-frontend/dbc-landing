import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { ServicesPageAsync } from "@/pages/ServicesPage";
import { routePaths } from "@/shared/config/routeConfig";
import { NotFoundPageAsync } from "@/pages/NotFoundPage";

function AppRoute() {
  return (
    <Routes>
      <Route path={routePaths.Home} element={<RootLayout />}>
        <Route index element={<HomePageAsync />} />
        <Route path={routePaths.Services} element={<ServicesPageAsync />} />
        <Route path={routePaths.NotFound} element={<NotFoundPageAsync />} />
      </Route>
    </Routes>
  );
}

export default memo(AppRoute);
