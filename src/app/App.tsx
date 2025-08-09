import { Suspense } from "react";
import { AppRoute } from "./Provider/AppRoutes";
import { PageLoading } from "@/shared/ui/PageLoading";

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <AppRoute />
    </Suspense>
  );
}

export default App;
