import { memo, useEffect, useState } from "react";
import styles from "./OurServices.module.scss";
import Title from "@/shared/ui/Title/ui/Title";
import type { IOurService } from "../types";
import { API, baseURL } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { AxiosError } from "axios";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Flex } from "@/shared/ui/Flex";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Skeleton } from "@/shared/ui/Skeleton";

function OurServices() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ourServicesData, setOurServicesData] = useState<IOurService[]>([]);

  const { i18n } = useTranslation();
  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getOurServiceData();
  }, [i18n.language]);

  if (error) return <ErrorTitle error={error} />;

  return (
    <div className={styles.ourServices}>
      <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
        OurServices
      </Title>

      <div className={styles.grid}>
        {ourServicesData.map((el) => (
          <div key={el.name} className={styles.item}>
            <Flex
              gap={30}
              align="center"
              className={styles.flex}
              flexDirection={isMobile ? "column" : "row"}
            >
              <div className={styles.imgWrapper}>
                {loading ? (
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className={styles.imgSkeleton}
                  />
                ) : (
                  <img src={`${baseURL}/${el.photo}`} alt={el.name} />
                )}
              </div>
              {loading ? (
                <Flex
                  gap={5}
                  className={styles.skeletonFlex}
                  flexDirection="column"
                >
                  <Skeleton className={styles["skeletonTitle-1"]} />
                  <Skeleton className={styles["skeletonTitle-2"]} />
                </Flex>
              ) : (
                <Title
                  className={styles.titleItem}
                  level={isMobile ? "h2" : "h1"}
                >
                  {el.name}
                </Title>
              )}
            </Flex>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OurServices);
