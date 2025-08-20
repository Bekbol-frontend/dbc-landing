import { memo } from "react";
import styles from "./HeadingForSection.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import Title from "../../Title/ui/Title";
import Heading from "../../Heading/ui/Heading";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
}

function HeadingForSection({ title }: IProps) {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return isMobile ? (
    <Title level="h2" className={styles.title}>
      {t(title)}
    </Title>
  ) : (
    <Heading level="h2" className={styles.title}>
      {t(title)}
    </Heading>
  );
}

export default memo(HeadingForSection);
