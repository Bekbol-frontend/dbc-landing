import type { ComponentProps } from "react";
import styles from "./Container.module.scss";
import { clsx } from "@/shared/lib/clsx";

function Container({
  children,
  className = "",
  ...otherProps
}: ComponentProps<"div">) {
  return (
    <div {...otherProps} className={clsx([styles.container, className])}>
      {children}
    </div>
  );
}

export default Container;
