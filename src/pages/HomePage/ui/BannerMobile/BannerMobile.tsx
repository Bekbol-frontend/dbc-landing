import { memo } from "react";
import styles from "./BannerMobile.module.scss";

import Abstrakt from "@/shared/assets/abstract/abstract.svg";
import DataTextImg from "@/shared/assets/abstract/Data.svg";
import Color2 from "@/shared/assets/abstract/color2.svg";
import { Flex } from "@/shared/ui/Flex";
import Title from "@/shared/ui/Title/ui/Title";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";

function BannerMobile() {
  const { t } = useTranslation("home");

  return (
    <div className={styles.bannerMobile}>
      <span className={styles.img1}>
        <img src={Color2} alt="image" />
      </span>
      <span className={styles.img2}>
        <img src={Color2} alt="image" />
      </span>

      <div className={styles.abstrakt}>
        <img src={Abstrakt} alt="image" />
      </div>
      <Flex className={styles.flex} flexDirection="column" gap={15}>
        <Title level="h2" className={styles.title}>
          {t("The most modern solutions for your business!")}
        </Title>
        <Button className={styles.btn}>{t("Contact us")}</Button>
      </Flex>

      <span className={styles.dataTextImg}>
        <img src={DataTextImg} alt="image" />
      </span>
    </div>
  );
}

export default memo(BannerMobile);
