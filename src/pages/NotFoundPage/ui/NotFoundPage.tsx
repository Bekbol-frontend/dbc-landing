import { Section } from "@/shared/ui/Section";
import styles from "./NotFoundPage.module.scss";
import { Flex } from "@/shared/ui/Flex";
import NotFoundImg from "@/shared/assets/404/404.svg";
import Title from "@/shared/ui/Title/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  return (
    <Section className={styles.sectionNotFound}>
      <div className={styles.inner}>
        <Flex
          align="center"
          justify="center"
          flex={1}
          className={styles.imgWrapper}
        >
          <img src={NotFoundImg} alt="not-found" />
        </Flex>
        <div className={styles.textWrapper}>
          <Title className={styles.title} level={isMobile ? "h2" : "h1"}>
            {t("404. There is nothing here...")}
          </Title>
          <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
            {t("Maybe the link is wrong.")}
          </Desc>
          <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
            {t("Or the page has been deleted.")}
          </Desc>
        </div>
        <Button
          size={isMobile ? "mobile" : "default"}
          onClick={() => navigate(routePaths.Home)}
        >
          {t("To the home page")}
        </Button>
      </div>
    </Section>
  );
}

export default NotFoundPage;
