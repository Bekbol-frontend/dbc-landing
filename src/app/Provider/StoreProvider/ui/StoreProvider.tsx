import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ContextProvider } from "../model/config";
import { API } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { IFooterData } from "@/widgets/Footer";
import type { AxiosError } from "axios";

interface IProps {
  children: ReactNode;
}

function StoreProvider({ children }: IProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [footerData, setFooterData] = useState<IFooterData | null>(null);

  useEffect(() => {
    setLoading(true);
    const getFooterData = async () => {
      try {
        const res = await API.get<IData<IFooterData>>("/api/footer");
        console.log(res.data.data);
        if (!res.data.data) throw new Error("Error");

        setFooterData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getFooterData();
  }, []);

  const values = useMemo(
    () => ({
      loading,
      error,
      footerData,
    }),
    [loading, error, footerData]
  );

  return <ContextProvider value={values}>{children}</ContextProvider>;
}

export default StoreProvider;
