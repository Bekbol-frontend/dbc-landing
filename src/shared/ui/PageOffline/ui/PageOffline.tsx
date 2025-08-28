import { Desc } from "../../Desc";
import { Flex } from "../../Flex";
import { Section } from "../../Section";
import Title from "../../Title/ui/Title";
import styles from "./PageOffline.module.scss";
import ImageInternet from "@/shared/assets/internet/Internet.svg";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useCallback } from "react";
import { Button } from "../../Button";

function PageOffline() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Section className={styles.pageOffline}>
      <div className={styles.inner}>
        <Flex className={styles.imgWrapper} align="center" justify="center">
          <img src={ImageInternet} alt="Internet outage..." />
        </Flex>
        <Flex className={styles.textWrapper} flexDirection="column" gap={15}>
          <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
            {t("Internet outage...")}
          </Title>
          <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
            {t(
              "There may be a network problem. Or you are not connected to the network."
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

export default PageOffline;
