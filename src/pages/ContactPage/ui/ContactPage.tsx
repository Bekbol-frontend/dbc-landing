import { ContactMap } from "@/entities/ContactMap";
import { Customers } from "@/entities/Customers";
import { FormSend } from "@/entities/FormSend";
import { Container } from "@/shared/ui/Container";
import { HeadingForSection } from "@/shared/ui/HeadingForSection";
import { Section } from "@/shared/ui/Section";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { IContactData } from "../types";
import { API, baseURL } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import styles from "./ContactPage.module.scss";
import { Flex } from "@/shared/ui/Flex";
import Title from "@/shared/ui/Title/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Skeleton } from "@/shared/ui/Skeleton";

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IContactData | null>(null);
  const { t, i18n } = useTranslation();
  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
    const getContactData = async () => {
      try {
        const response = await API.get<IData<IContactData>>("/api/contact", {
          headers: {
            "Accept-Language": i18n.language,
          },
        });
        if (!response.data) throw new Error();

        setData(response.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getContactData();
  }, [i18n.language]);

  if (error) return <ErrorTitle error={error} />;

  return (
    <Section>
      <Container>
        <HeadingForSection title={t("Contacts")} />

        <div className={styles.grid}>
          {loading
            ? Array(3)
                .fill("")
                .map((_, i) => (
                  <Skeleton key={i} className={styles.skeletonItem} />
                ))
            : data?.infos.map((card) => (
                <Flex
                  flexDirection="column"
                  gap={isMobile ? 10 : 15}
                  className={styles.item}
                  key={card.title}
                >
                  <Flex>
                    <img
                      src={`${baseURL}/storage/${card.icon}`}
                      alt={card.title}
                    />
                  </Flex>
                  <Title level={isMobile ? "h2" : "h1"}>{card.title}</Title>
                  <Flex flexDirection="column" gap={5}>
                    {card.descriptions.map((el, i) => (
                      <Desc key={i} level="mobile" className={styles.desc}>
                        {el.desc}
                      </Desc>
                    ))}
                  </Flex>
                </Flex>
              ))}
        </div>

        {loading ? (
          <Skeleton className={styles.skeletonMap} />
        ) : data ? (
          <ContactMap lat={data.location.lat} lng={data.location.lng} />
        ) : null}
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ContactPage);
