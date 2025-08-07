import { type ComponentProps, type CSSProperties } from "react";
import styles from "./Flex.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends ComponentProps<"div"> {
  align?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  justify?: CSSProperties["justifyContent"];
  flexDirection?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];

}

function Flex(props: IProps) {
  const {
    children,
    className = "",

    align = "flex-start",
    alignSelf = "auto",
    justify = "flex-start",
    flexDirection = "row",
    gap = 0,
    flex,

    style,

    ...otherProps
  } = props;

  return (
    <div
      style={{
        alignItems: align,
        alignSelf,
        justifyContent: justify,
        flexDirection,
        gap,
        flex,
        ...style,
      }}
      className={clsx([styles.flex, className])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Flex;
