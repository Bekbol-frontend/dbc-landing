import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ContextProvider } from "../model/config";
import { API } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { IFooterData } from "@/widgets/Footer";
import type { AxiosError } from "axios";
import type { IOurService } from "@/entities/OurServices";
import { useTranslation } from "react-i18next";

interface IProps {
  children: ReactNode;
}

function StoreProvider({ children }: IProps) {
  // footer-state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [footerData, setFooterData] = useState<IFooterData | null>(null);

  // service-state
  const [loadingService, setLoadingService] = useState(false);
  const [errorService, setErrorService] = useState<string | null>(null);
  const [ourServicesData, setOurServicesData] = useState<IOurService[]>([]);

  const { i18n } = useTranslation();

  // footer
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

  // service
  useEffect(() => {
    setLoadingService(true);
    const getOurServiceData = async () => {
      try {
        const res = await API.get<IData<IOurService[]>>("/api/services", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });

        if (!res.data.data) throw new Error("Error");

        setOurServicesData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        console.log(err.message);
        setErrorService(err.message);
      } finally {
        setLoadingService(false);
      }
    };

    getOurServiceData();
  }, [i18n.language]);

  const values = useMemo(
    () => ({
      footer: {
        loading,
        error,
        footerData,
      },

      services: {
        loading: loadingService,
        error: errorService,
        data: ourServicesData,
      },
    }),
    [loading, error, footerData, loadingService, errorService, ourServicesData]
  );

  return <ContextProvider value={values}>{children}</ContextProvider>;
}

export default StoreProvider;
