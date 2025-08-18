import { memo } from "react";
import { OurServices } from "@/entities/OurServices";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { Section } from "@/shared/ui/Section";
import Title from "@/shared/ui/Title/ui/Title";
import { useTranslation } from "react-i18next";
import styles from "./ServicesPage.module.scss";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";

function ServicesPage() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        {isMobile ? (
          <Title level="h2" className={styles.title}>
            {t("Services")}
          </Title>
        ) : (
          <Heading level="h2" className={styles.title}>
            {t("Services")}
          </Heading>
        )}

        <OurServices notTitle />
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ServicesPage);
