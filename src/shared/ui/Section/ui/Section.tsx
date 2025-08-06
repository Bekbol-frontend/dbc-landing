import { clsx } from "@/shared/lib/clsx";
import type { ComponentProps } from "react";
import styles from "./Section.module.scss";

function Section({
  children,
  className = "",
  ...otherProps
}: ComponentProps<"section">) {
  return (
    <section {...otherProps} className={clsx([styles.section, className])}>
      {children}
    </section>
  );
}

export default Section;
