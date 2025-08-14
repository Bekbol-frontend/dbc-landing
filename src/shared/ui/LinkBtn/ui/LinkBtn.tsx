import { useMemo, type ComponentProps } from "react";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import styles from "./LinkBtn.module.scss";
import { Link } from "react-router-dom";

interface IProps extends ComponentProps<"a"> {
  size?: "default" | "large" | "mobile";
  to: string;
}

function LinkBtn(props: IProps) {
  const {
    size = "default",
    children,
    className = "",
    to = "",
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

export default LinkBtn;
