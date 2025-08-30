import { memo, useEffect, useState } from "react";
import { Flex } from "@/shared/ui/Flex";
import type { ICompanyData } from "../types";
import { API, baseURL } from "@/shared/api";
import { useTranslation } from "react-i18next";
import type { IData } from "@/shared/types/data";
import type { AxiosError } from "axios";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import styles from "./Company.module.scss";
import { Desc } from "@/shared/ui/Desc";
import { clsx } from "@/shared/lib/clsx";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Content } from "@/shared/ui/Content";
import { Heading } from "@/shared/ui/Heading";
import { Skeleton } from "@/shared/ui/Skeleton";

function Company() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [companyData, setCompanyData] = useState<ICompanyData | null>(null);

  const { i18n, t } = useTranslation();
  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
    const getCompanyData = async () => {
      try {
        const res = await API.get<IData<ICompanyData>>("/api/company-state", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });
        if (!res.data) throw new Error("Error");

        setCompanyData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCompanyData();
  }, [i18n.language]);

  if (error) return <ErrorTitle error={error} />;

  if (!companyData) return null;

  return (
    <Content>
      <Flex gap={30} flexDirection={isMobile ? "column" : "row"}>
        <div className={styles.left}>
          {loading ? (
            <Skeleton className={styles.imgSkeleton} />
          ) : (
            <img
              src={`${baseURL}/${companyData.image}`}
              alt="DBC data business control"
            />
          )}
        </div>
        <div className={styles.right}>
          {loading ? (
            <Flex flexDirection="column" gap={15}>
              <Skeleton className={styles.descSkeleton1} />
              <Skeleton className={styles.descSkeleton2} />
            </Flex>
          ) : (
            <Desc
              className={styles.desc}
              level={isMobile ? "mobile" : "desktop"}
            >
              {t(
                "DATA is not just an IT company. It is a perfect combination of technology, ideas and trust."
              )}
            </Desc>
          )}
          {loading ? (
            <Skeleton className={styles.descBottomSkeleton} />
          ) : (
            <Desc
              className={clsx([styles.desc, styles.descBottom])}
              level={isMobile ? "mobile" : "desktop"}
            >
              {t(
                "We transform complex problems into simple and effective solutions."
              )}
            </Desc>
          )}

          <div className={styles.grid}>
            {companyData.infos.map((el) => (
              <div className={styles.item} key={el.title}>
                {loading ? (
                  <Skeleton className={styles.itemTitleSkeleton} />
                ) : (
                  <Heading level="h2" className={styles.itemTitle}>
                    {el.title}
                  </Heading>
                )}
                {loading ? (
                  <Skeleton className={styles.itemDescSkeleton} />
                ) : (
                  <Desc
                    level={isMobile ? "mobile" : "desktop"}
                    className={styles.itemDesc}
                  >
                    {el.desc}
                  </Desc>
                )}
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </Content>
  );
}

export default memo(Company);
