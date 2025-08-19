import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Projects.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { baseURL } from "@/shared/api";
import type { IProject } from "../types";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Flex } from "@/shared/ui/Flex";
import Title from "@/shared/ui/Title/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { Button } from "@/shared/ui/Button";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Content } from "@/shared/ui/Content";
import { LinkRouter } from "@/shared/ui/LinkRouter";
import { useAppContext } from "@/app/Provider/StoreProvider";

function Projects() {
  const [sliceNumber, setSliceNumber] = useState(1);
  const [allData, setAllData] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const rect = element?.getBoundingClientRect();
    console.log(rect);
  }, [ref]);

  const { project } = useAppContext();
  const { data, error, loading } = project;

  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  const onClickShowAllData = useCallback(() => {
    setSliceNumber(data.length);
    setAllData(true);
  }, [data]);

  const onClickHideData = useCallback(() => {
    const element = ref.current;

    setSliceNumber(2);
    setAllData(false);

    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - 120;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, [ref]);

  const products: IProject[] = useMemo<IProject[]>(
    () => data.slice(0, sliceNumber),
    [data, sliceNumber]
  );

  useEffect(() => {
    setSliceNumber(data.length / 2);
  }, [data]);

  if (error) return <ErrorTitle error={error} />;

  return (
    <Content className="my-section" ref={ref}>
      <SectionTitle title={t("Our projects")} />

      <div className={styles.grid}>
        {products.map((el) => (
          <Flex
            key={el.id}
            className={styles.item}
            align="center"
            gap={30}
            flexDirection={isMobile ? "column" : "row"}
          >
            <div
              className={styles.left}
              style={{
                order: isMobile ? 2 : 1,
              }}
            >
              {loading ? (
                <Skeleton className={styles.titleSkeleton} />
              ) : (
                <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
                  {el.title}
                </Title>
              )}

              {loading ? (
                <Skeleton className={styles.subTitleSkeleton} />
              ) : isMobile ? (
                <Desc className={styles.subTitle}>{el.sub_title}</Desc>
              ) : (
                <Title level="h2" className={styles.subTitle}>
                  {el.sub_title}
                </Title>
              )}
              {loading ? (
                <Flex
                  gap={7}
                  flexDirection="column"
                  className={styles.flexDescSkeleton}
                >
                  <Skeleton className={styles.descSkeleton1} />
                  <Skeleton className={styles.descSkeleton2} />
                  <Skeleton className={styles.descSkeleton3} />
                  <Skeleton className={styles.descSkeleton2} />
                </Flex>
              ) : (
                <Desc level="mobile" className={styles.desc}>
                  {el.description}
                </Desc>
              )}
              {loading ? (
                <Skeleton className={styles.linkSkeleton} />
              ) : (
                <LinkRouter to="/" size="mobile" className={styles.link}>
                  {t("More")}
                </LinkRouter>
              )}
            </div>
            <div
              className={styles.right}
              style={{
                order: isMobile ? 1 : 2,
              }}
            >
              {loading ? (
                <Skeleton className={styles.rightSekeleton} />
              ) : (
                <img
                  src={`${baseURL}/storage/${el.images[0]}`}
                  alt={el.title}
                  loading="lazy"
                />
              )}
            </div>
          </Flex>
        ))}
      </div>

      <Flex align="center" justify="center">
        {!allData ? (
          <Button
            onClick={onClickShowAllData}
            size={isMobile ? "mobile" : "default"}
          >
            {t("All projects")}
          </Button>
        ) : (
          <Button
            onClick={onClickHideData}
            size={isMobile ? "mobile" : "default"}
          >
            {t("Hide")}
          </Button>
        )}
      </Flex>
    </Content>
  );
}

export default memo(Projects);
