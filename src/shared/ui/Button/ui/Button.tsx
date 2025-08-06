import { memo, useMemo, type ComponentProps } from "react";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import styles from "./Button.module.scss";

interface IProps extends ComponentProps<"button"> { 
  size?: "default" | "large";
}

function Button(props: IProps) {
  const { size = "default", children, className = "", ...otherProps } = props;

  const mods: MODS_CLSX = useMemo(
    () => ({
      [styles[size]]: true,
    }),
    [size]
  );

  return (
    <button {...otherProps} className={clsx([styles.btn, className], mods)}>
      <span className={styles.spanText}>{children}</span>
    </button>
  );
}

export default memo(Button);
