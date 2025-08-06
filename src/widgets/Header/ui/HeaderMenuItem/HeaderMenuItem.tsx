import { memo } from "react";
import type { IMenuItem } from "../../model/types";
import { NavLink } from "react-router-dom";
import styles from "./HeaderMenuItem.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends IMenuItem {}

function HeaderMenuItem(props: IProps) {
  const { name, path } = props;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx([styles.link], { [styles.active]: isActive })
      }
    >
      {name}
    </NavLink>
  );
}

export default memo(HeaderMenuItem);
