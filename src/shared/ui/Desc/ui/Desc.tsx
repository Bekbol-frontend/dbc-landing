import type { ComponentProps } from "react";
import styles from "./Desc.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends ComponentProps<"p"> {
  level?: "desktop" | "mobile";
}

function Desc(props: IProps) {
  const { children, className = "", level = "desktop", ...otherProps } = props;

  return (
    <p
      className={clsx([styles.desc, className], { [styles[level]]: true })}
      {...otherProps}
    >
      {children}
    </p>
  );
}

export default Desc;
