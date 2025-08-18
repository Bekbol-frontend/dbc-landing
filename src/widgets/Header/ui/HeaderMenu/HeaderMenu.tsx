import { memo, useMemo } from "react";
import { menuItems } from "../../model/menuItems";
import { Flex } from "@/shared/ui/Flex";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import styles from "./HeaderMenu.module.scss";
import { useTranslation } from "react-i18next";

function HeaderMenu() {
  const { t } = useTranslation();

  const MenuLink = useMemo(
    () =>
      menuItems.map((el) => (
        <HeaderMenuItem name={t(el.name)} path={el.path} key={el.path} />
      )),
    [t]
  );

  return (
    <Flex
      align="center"
      gap={`var(--space-x-small)`}
      className={styles.headerMenu}
    >
      {MenuLink}
    </Flex>
  );
}

export default memo(HeaderMenu);
