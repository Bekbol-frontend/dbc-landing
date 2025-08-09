import { memo } from "react";
import { Section } from "../../Section";
import DataLogo from "@/shared/assets/abstract/Data.svg";
import styles from "./PageLoading.module.scss";
import { Spinner } from "../../Spinner";

function PageLoading() {
  return (
    <Section className={styles.section}>
      <span className={styles.dataImageWrapper}>
        <img src={DataLogo} alt="data logo" className={styles.dataImageLogo} />
      </span>
      <div className={styles.inner}>
        <Spinner />
      </div>
    </Section>
  );
}

export default memo(PageLoading);
