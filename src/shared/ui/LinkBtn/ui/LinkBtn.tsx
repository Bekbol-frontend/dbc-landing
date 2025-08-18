import { useMemo, type ComponentProps } from "react";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import styles from "./LinkBtn.module.scss";

interface IProps extends ComponentProps<"a"> {
  size?: "default" | "large" | "mobile";
}

function LinkBtn(props: IProps) {
  const { size = "default", children, className = "", ...otherProps } = props;

  const mods: MODS_CLSX = useMemo(
    () => ({
      [styles[size]]: true,
    }),
    [size]
  );

  return (
    <a {...otherProps} className={clsx([styles.btn, className], mods)}>
      <span className={styles.spanText}>{children}</span>
    </a>
  );
}

export default LinkBtn;
