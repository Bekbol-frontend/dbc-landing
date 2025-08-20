import { memo, useCallback } from "react";
import styles from "./Links.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { NavLink } from "react-router-dom";
import { clsx } from "@/shared/lib/clsx";
import { useTranslation } from "react-i18next";
import { menuItems } from "@/widgets/Header";

interface IProps {
  className?: string;
}

function Links({ className = "" }: IProps) {
  const { t } = useTranslation();

  const onClickToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex flexDirection="column" gap={15} className={clsx([className])}>
      {menuItems.map((el) => (
        <NavLink
          to={el.path}
          className={({ isActive }) =>
            clsx([styles.menuLink], {
              [styles.active]: isActive,
            })
          }
          onClick={onClickToTop}
          key={el.path}
        >
          {t(el.name)}
        </NavLink>
      ))}
    </Flex>
  );
}

export default memo(Links);
