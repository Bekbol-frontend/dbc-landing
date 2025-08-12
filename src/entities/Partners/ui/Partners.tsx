import { memo, useEffect, useState } from "react";
import type { IPartner } from "../types";
import { API } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import PartnersSwiper from "./PartnersSwiper/PartnersSwiper";
import styles from "./Partners.module.scss";
import Title from "@/shared/ui/Title/ui/Title";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import PartnersSkeleton from "./PartnersSkeleton/PartnersSkeleton";

function Partners() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [partners, setPartners] = useState<IPartner[]>([]);

  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);

    const getPartners = async () => {
      try {
        const res = await API.get<IData<IPartner[]>>("/api/partners");

        if (!res.data.data) throw new Error("Error");

        setPartners(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPartners();
  }, []);

  if (loading) return <PartnersSkeleton />;
  if (error) return <ErrorTitle error={error} />;

  return partners.length ? (
    <div className={styles.partners}>
      <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
        {t("Our partners")}
      </Title>
      <PartnersSwiper partners={partners} />
    </div>
  ) : (
    "joq"
  );
}

export default memo(Partners);
