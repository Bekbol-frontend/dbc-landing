import { memo } from "react";
import styles from "./OurServices.module.scss";
import Title from "@/shared/ui/Title/ui/Title";
import { baseURL } from "@/shared/api";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Flex } from "@/shared/ui/Flex";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Skeleton } from "@/shared/ui/Skeleton";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { Content } from "@/shared/ui/Content";
import { useAppContext } from "@/app/Provider/StoreProvider";

interface IProps {
  notTitle?: boolean;
}

function OurServices({ notTitle }: IProps) {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  const { services } = useAppContext();

  const { data: ourServicesData, loading, error } = services;

  if (error) return <ErrorTitle error={error} />;

  return (
    <Content>
      {notTitle ? null : <SectionTitle title={t("Our services")} />}

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
    </Content>
  );
}

export default memo(OurServices);
