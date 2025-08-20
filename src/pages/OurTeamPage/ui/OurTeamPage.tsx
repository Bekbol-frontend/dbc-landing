import { memo, useEffect, useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { HeadingForSection } from "@/shared/ui/HeadingForSection";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";
import { API, baseURL } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import type { ITeam } from "../types";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import Title from "@/shared/ui/Title/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import styles from "./OurTeamPage.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Flex } from "@/shared/ui/Flex";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function OurTeamPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ITeam[]>([]);

  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
    const getTeam = async () => {
      try {
        const res = await API.get<IData<ITeam[]>>("/api/team");

        if (!res.data) throw new Error("Error");

        setData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTeam();
  }, []);

  if (error) return <ErrorTitle error={error} />;

  return (
    <Section>
      <Container>
        <HeadingForSection title="Our team" />

        <div className={styles.grid}>
          {loading
            ? Array(12)
                .fill("")
                .map((_, i) => (
                  <Flex gap={isMobile ? 15 : 20} flexDirection="column" key={i}>
                    <Skeleton className={styles.itemImgSkeleton} />
                    <Skeleton className={styles.itemTitleSkeleton} />
                    <Skeleton className={styles.itemDescSkeleton} />
                  </Flex>
                ))
            : data.map((el, i) => (
                <div className={styles.item} key={`${el.name}_${i}`}>
                  <div className={styles.itemImgWrapper}>
                    <img
                      src={`${baseURL}/${el.avatar}`}
                      alt={el.name}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.itemBody}>
                    <Title level="h2" className={styles.title}>
                      {el.name}
                    </Title>
                    <Desc>{el.position}</Desc>
                  </div>
                </div>
              ))}
        </div>

        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(OurTeamPage);
