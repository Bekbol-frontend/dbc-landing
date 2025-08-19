import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ContextProvider } from "../model/config";
import { API } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { IFooterData } from "@/widgets/Footer";
import type { AxiosError } from "axios";
import type { IOurService } from "@/entities/OurServices";
import { useTranslation } from "react-i18next";
import type { ICustomer } from "@/entities/Customers";
import type { IProject } from "@/entities/Projects";

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

  // customer-state
  const [loadingCustomer, setLoadingCustomer] = useState(false);
  const [errorCustomer, setErrorCustomer] = useState<string | null>(null);
  const [customerData, setCustomerData] = useState<ICustomer[]>([]);

  // projects-state
  const [loadingProject, setLoadingProject] = useState(false);
  const [errorProject, setErrorProject] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<IProject[]>([]);

  const { i18n } = useTranslation();

  // footer
  useEffect(() => {
    setLoading(true);
    const getFooterData = async () => {
      try {
        const res = await API.get<IData<IFooterData>>("/api/footer");
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
        setErrorService(err.message);
      } finally {
        setLoadingService(false);
      }
    };

    getOurServiceData();
  }, [i18n.language]);

  // customer
  useEffect(() => {
    setLoadingCustomer(true);
    const getCustomerData = async () => {
      try {
        const res = await API.get<IData<ICustomer[]>>("/api/feedbacks");
        if (!res.data.data) return new Error("Error");

        setCustomerData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setErrorCustomer(err.message);
      } finally {
        setLoadingCustomer(false);
      }
    };

    getCustomerData();
  }, []);

  // project
  useEffect(() => {
    setLoadingProject(true);
    const getProjects = async () => {
      try {
        const res = await API.get<IData<IProject[]>>("/api/projects", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });
        if (!res.data) throw new Error("Error");
        setProjectData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setErrorProject(err.message);
      } finally {
        setLoadingProject(false);
      }
    };

    getProjects();
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

      customer: {
        loading: loadingCustomer,
        error: errorCustomer,
        data: customerData,
      },

      project: {
        loading: loadingProject,
        error: errorProject,
        data: projectData,
      },
    }),
    [
      loading,
      error,
      footerData,
      loadingService,
      errorService,
      ourServicesData,
      loadingCustomer,
      errorCustomer,
      customerData,

      loadingProject,
      errorProject,
      projectData,
    ]
  );

  return <ContextProvider value={values}>{children}</ContextProvider>;
}

export default StoreProvider;
