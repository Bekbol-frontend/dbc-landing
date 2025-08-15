import { memo, useEffect, useState } from "react";
import type { IPartner } from "../types";
import { API } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import PartnersSwiper from "./PartnersSwiper/PartnersSwiper";
import styles from "./Partners.module.scss";
import { useTranslation } from "react-i18next";
import PartnersSkeleton from "./PartnersSkeleton/PartnersSkeleton";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { Content } from "@/shared/ui/Content";

function Partners() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [partners, setPartners] = useState<IPartner[]>([]);

  const { t } = useTranslation();

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
    <Content>
      <SectionTitle title={t("Our partners")} className={styles.title} />
      <PartnersSwiper partners={partners} />
    </Content>
  ) : (
    "joq"
  );
}

export default memo(Partners);
