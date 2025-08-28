import { Suspense, useEffect, useState } from "react";
import { AppRoute } from "./Provider/AppRoutes";
import { PageLoading } from "@/shared/ui/PageLoading";
import { PageOffline } from "@/shared/ui/PageOffline";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) return <PageOffline />;

  return (
    <Suspense fallback={<PageLoading />}>
      <AppRoute />
    </Suspense>
  );
}

export default App;
