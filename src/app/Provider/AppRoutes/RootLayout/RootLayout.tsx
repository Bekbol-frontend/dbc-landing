import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default memo(RootLayout);
