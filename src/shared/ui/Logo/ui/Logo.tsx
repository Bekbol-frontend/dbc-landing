import { memo } from "react";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link to={routePaths.Home} className={styles.logoLink}>
      <img src="/logo.svg" alt="DBC" />
    </Link>
  );
}

export default memo(Logo);
