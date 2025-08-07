import { memo } from "react";
import styles from "./Banner.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { Button } from "@/shared/ui/Button";
import Abstrakt from "@/shared/assets/abstract/abstract.svg";
import { Heading } from "@/shared/ui/Heading";
import DataTextImg from "@/shared/assets/abstract/Data.svg";
import Color1 from "@/shared/assets/abstract/color1.svg";
import Color2 from "@/shared/assets/abstract/color2.svg";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation("home");

  return (
    <Flex align="center" justify="center" className={styles.banner}>
      <Flex
        align="center"
        justify="space-between"
        gap={`var(--space-medium)`}
        className={styles.inner}
      >
        <Flex
          direction="column"
          gap={`var(--space-large)`}
          className={styles.left}
        >
          <Heading level="h2">
            {t("The most modern solutions for your business!")}
          </Heading>
          <Button>{t("Contact us")}</Button>
        </Flex>
        <Flex className={styles.right}>
          <img src={Abstrakt} alt="image" />
        </Flex>
      </Flex>

      <span className={styles.color1ImgWrapper}>
        <img src={Color1} alt="image" />
      </span>

      <span className={styles.color2ImgWrapper}>
        <img src={Color2} alt="image" />
      </span>

      <span className={styles.dataTextWrapper}>
        <img src={DataTextImg} alt="data" />
      </span>
    </Flex>
  );
}

export default memo(Banner);
