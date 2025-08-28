import { Desc } from "../../Desc";
import { Section } from "../../Section";
import Title from "../../Title/ui/Title";
import styles from "./PageError.module.scss";
import ImagePageError from "@/shared/assets/error/page-error.svg";
import { Flex } from "../../Flex";
import { Button } from "../../Button";
import { useCallback } from "react";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";

function PageError() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Section className={styles.section}>
      <div className={styles.inner}>
        <Flex className={styles.imgWrapper} align="center" justify="center">
          <img src={ImagePageError} alt="error-boundary" />
        </Flex>
        <Flex className={styles.textWrapper} flexDirection="column" gap={15}>
          <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
            {t("Something went wrong...")}
          </Title>
          <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
            {t(
              "We were unable to load the page you requested. We will resolve this issue soon."
            )}
          </Desc>
        </Flex>
        <Button onClick={reloadPage} size={isMobile ? "mobile" : "default"}>
          {t("Reload page")}
        </Button>
      </div>
    </Section>
  );
}

export default PageError;
