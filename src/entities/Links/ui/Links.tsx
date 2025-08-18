import { memo } from "react";
import styles from "./Links.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import { clsx } from "@/shared/lib/clsx";
import { useTranslation } from "react-i18next";

interface IProps {
  className?: string;
}

function Links({ className = "" }: IProps) {
  const { t } = useTranslation();

  return (
    <Flex flexDirection="column" gap={15} className={clsx([className])}>
      <Link to={routePaths.Home} className={styles.menuLink}>
        {t("Services")}
      </Link>
      <Link to={routePaths.Home} className={styles.menuLink}>
        {t("Projects")}
      </Link>
      <Link to={routePaths.Home} className={styles.menuLink}>
        {t("Our team")}
      </Link>
      <Link to={routePaths.Home} className={styles.menuLink}>
        {t("Contacts")}
      </Link>
    </Flex>
  );
}

export default memo(Links);
