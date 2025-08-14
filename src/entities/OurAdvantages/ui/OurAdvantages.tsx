import { memo } from "react";
import styles from "./OurAdvantages.module.scss";
import Title from "@/shared/ui/Title/ui/Title";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { ourAdvantages } from "../items";
import { Desc } from "@/shared/ui/Desc";
import { SectionTitle } from "@/shared/ui/SectionTitle";

function OurAdvantages() {
  const { t } = useTranslation();

  const { isMobile } = useResponsive();

  return (
    <div className={styles.ourAdvantages}>
      <SectionTitle title={t("Our advantages")} />

      <div className={styles.grid}>
        {ourAdvantages.map((el) => (
          <div className={styles.item} key={el.id}>
            <div className={styles.itemInner}>
              <span className={styles.imgWrapper}>
                <img src={el.imgUrl} alt={el.subTitle} />
              </span>
              <Title
                className={styles.itemTitle}
                level={isMobile ? "h2" : "h1"}
              >
                {el.title}
              </Title>
              <Desc
                className={styles.desc}
                level={isMobile ? "mobile" : "desktop"}
              >
                {el.subTitle}
              </Desc>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OurAdvantages);
