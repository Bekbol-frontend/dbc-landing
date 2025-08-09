import { memo } from "react";
import styles from "./Spinner.module.scss";

function Spinner() {
  return <div className={styles.loading} />;
}

export default memo(Spinner);
