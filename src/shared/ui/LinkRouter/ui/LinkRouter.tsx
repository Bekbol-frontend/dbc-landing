import { useMemo, type ReactNode } from "react";
import styles from "./LinkRouter.module.scss";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import { Link } from "react-router-dom";

interface IProps {
  size?: "default" | "large" | "mobile";
  className?: string;
  children: ReactNode;
  to: string;
}

function LinkRouter(props: IProps) {
  const {
    size = "default",
    children,
    className = "",
    to,
    ...otherProps
  } = props;

  const mods: MODS_CLSX = useMemo(
    () => ({
      [styles[size]]: true,
    }),
    [size]
  );

  return (
    <Link
      to={to}
      {...otherProps}
      className={clsx([styles.btn, className], mods)}
    >
      <span className={styles.spanText}>{children}</span>
    </Link>
  );
}

export default LinkRouter;
