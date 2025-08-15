import { memo, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Projects.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { API, baseURL } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import type { IProject } from "../types";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Flex } from "@/shared/ui/Flex";
import Title from "@/shared/ui/Title/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { LinkBtn } from "@/shared/ui/LinkBtn";
import { Button } from "@/shared/ui/Button";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Content } from "@/shared/ui/Content";

function Projects() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IProject[]>([]);
  const [sliceNumber, setSliceNumber] = useState(2);

  const { t, i18n } = useTranslation();
  const { isMobile } = useResponsive();

  const onClickShowAllData = useCallback(() => {
    setSliceNumber(data.length);
  }, [data]);

  useEffect(() => {
    setLoading(true);
    const getProjects = async () => {
      try {
        const res = await API.get<IData<IProject[]>>("/api/projects", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });
        if (!res.data) throw new Error("Error");
        setData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, [i18n.language]);

  const products: IProject[] = useMemo<IProject[]>(
    () => data.slice(0, sliceNumber),
    [data, sliceNumber]
  );

  if (error) return <ErrorTitle error={error} />;

  return (
    <Content>
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
                <LinkBtn to="/" size="mobile" className={styles.link}>
                  {t("More")}
                </LinkBtn>
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
        <Button
          onClick={onClickShowAllData}
          size={isMobile ? "mobile" : "default"}
        >
          {t("All projects")}
        </Button>
      </Flex>
    </Content>
  );
}

export default memo(Projects);
