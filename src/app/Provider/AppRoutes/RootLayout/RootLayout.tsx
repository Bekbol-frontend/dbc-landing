import { routePaths } from "@/shared/config/routeConfig";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { memo, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
  const { pathname } = useLocation();

  const check = useMemo(
    () => Object.values(routePaths).includes(pathname),
    [pathname]
  );

  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      {check && <Footer />}
    </>
  );
}

export default memo(RootLayout);
