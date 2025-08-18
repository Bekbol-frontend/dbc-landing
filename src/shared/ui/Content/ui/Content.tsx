import { clsx } from "@/shared/lib/clsx";
import styles from "./Content.module.scss";
import type { ComponentProps } from "react";

function Content({
  children,
  className = "",
  ...otherProps
}: ComponentProps<"div">) {
  return (
    <div className={clsx([styles.content, className])} {...otherProps}>
      {children}
    </div>
  );
}

export default Content;
