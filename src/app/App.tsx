import { Suspense } from "react";
import { AppRoute } from "./Provider/AppRoutes";

function App() {
  return (
    <Suspense fallback="loading...">
      <AppRoute />
    </Suspense>
  );
}

export default App;
