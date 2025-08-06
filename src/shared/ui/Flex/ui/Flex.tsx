import { useMemo, type ComponentProps, type CSSProperties } from "react";
import styles from "./Flex.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends ComponentProps<"div"> {
  align?: "flex-start" | "center" | "flex-end";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "row" | "column";
  gap?: number | string;
}

function Flex(props: IProps) {
  const {
    children,
    className = "",

    align = "flex-start",
    justify = "flex-start",
    direction = "row",
    gap = 0,

    ...otherProps
  } = props;

  const flexStyle: CSSProperties = useMemo<CSSProperties>(
    () => ({
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      gap: typeof gap === "number" ? `${gap}px` : gap,
    }),
    [align, justify, direction, gap]
  );

  return (
    <div
      style={flexStyle}
      className={clsx([styles.flex, className])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Flex;
