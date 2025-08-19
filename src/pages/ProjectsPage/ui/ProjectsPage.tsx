import { memo } from "react";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import styles from "./ProjectsPage.module.scss";
import Title from "@/shared/ui/Title/ui/Title";
import { Heading } from "@/shared/ui/Heading";
import { useTranslation } from "react-i18next";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";
import { Projects } from "@/entities/Projects";

function ProjectsPage() {
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

        <Projects />
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ProjectsPage);
