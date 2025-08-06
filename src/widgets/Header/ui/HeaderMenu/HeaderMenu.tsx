import { memo, useMemo } from "react";
import { menuItems } from "../../model/menuItems";
import { Flex } from "@/shared/ui/Flex";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  const MenuLink = useMemo(
    () =>
      menuItems.map((el) => (
        <HeaderMenuItem name={el.name} path={el.path} key={el.path} />
      )),
    []
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
