import { memo, useEffect, useState } from "react";
import type { IBanner } from "../types";
import { API, baseURL } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { AxiosError } from "axios";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import styles from "./Banner.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Heading } from "@/shared/ui/Heading";
import { useTranslation } from "react-i18next";
import Title from "@/shared/ui/Title/ui/Title";
import { Button } from "@/shared/ui/Button";

function Banner() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [banner, setBanner] = useState<IBanner | null>(null);

  const { isMobile } = useResponsive();

  const { i18n, t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    const getBanner = async () => {
      try {
        const res = await API.get<IData<IBanner>>("/api/banner", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });

        if (!res.data.data) throw new Error("Error");

        setBanner(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBanner();
  }, [i18n.language]);

  if (loading)
    return (
      <Skeleton
        style={{
          borderRadius: "var(--radius-large)",
          height: isMobile ? "600px" : "764px",
        }}
      />
    );

  if (error) return <ErrorTitle error={error} />;

  return (
    banner && (
      <div
        style={{
          backgroundImage: `url(${baseURL}/${
            isMobile ? banner.mobile_image : banner.desktop_image
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.banner}
      >
        <div className={styles.inner}>
          {isMobile ? (
            <Title level="h2" className={styles.title}>
              {banner.title}
            </Title>
          ) : (
            <Heading level="h2" className={styles.title}>
              {banner.title}
            </Heading>
          )}
          <Button size={isMobile ? "mobile" : "default"}>
            {t("Contact us")}
          </Button>
        </div>
      </div>
    )
  );
}

export default memo(Banner);
