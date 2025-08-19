import type { IProject } from "@/entities/Projects";
import { API, baseURL } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import { Container } from "@/shared/ui/Container";
import { Desc } from "@/shared/ui/Desc";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { Heading } from "@/shared/ui/Heading";
import { Section } from "@/shared/ui/Section";
import Title from "@/shared/ui/Title/ui/Title";
import type { AxiosError } from "axios";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectsDetailPage.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";
import { Skeleton } from "@/shared/ui/Skeleton";
import { clsx } from "@/shared/lib/clsx";
import { Flex } from "@/shared/ui/Flex";

function ProjectsDetailPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IProject | null>(null);

  const { id } = useParams();
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const getProjectDetail = async () => {
        try {
          const res = await API.get<IData<IProject>>(`api/projects/${id}`);
          if (!res.data) return new Error("Error");
          setData(res.data.data);
        } catch (error) {
          const err = error as AxiosError;
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      getProjectDetail();
    }
  }, [id]);

  if (error) return <ErrorTitle error={error} />;

  return (
    <Section>
      <Container>
        {loading ? (
          <Skeleton className={styles.headingSkeleton} />
        ) : isMobile ? (
          <Title level="h2" className={styles.headingTitle}>
            {data?.title}
          </Title>
        ) : (
          <Heading level="h2" className={styles.headingTitle}>
            {data?.title}
          </Heading>
        )}

        {loading ? (
          <Skeleton className={styles.titleSkeleton} />
        ) : isMobile ? (
          <Desc className={styles.title}>{data?.sub_title}</Desc>
        ) : (
          <Title level="h2" className={styles.title}>
            {data?.sub_title}
          </Title>
        )}

        {loading ? (
          <Flex flexDirection="column" gap={8}>
            <Skeleton className={styles.descSkeleton} />
            <Skeleton className={styles.descSkeleton} />
            <Skeleton
              className={clsx([styles.descSkeleton, styles.descSkeletonBottom])}
            />
          </Flex>
        ) : isMobile ? (
          <Desc level="mobile" className={styles.desc}>
            {data?.description}
          </Desc>
        ) : (
          <Desc className={styles.desc}>{data?.description}</Desc>
        )}

        <div className={styles.grid}>
          {loading
            ? Array(4)
                .fill("")
                .map((_, i) => (
                  <Skeleton key={i} className={styles.itemSkeleton} />
                ))
            : data?.images.map((el, i) => (
                <div className={styles.item} key={`${el}_${i}`}>
                  <img src={`${baseURL}/storage/${el}`} alt="project" />
                </div>
              ))}
        </div>

        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ProjectsDetailPage);
