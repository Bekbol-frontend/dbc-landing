import { memo, type CSSProperties } from "react";
import styles from "./Skeleton.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  className?: string;
  style?: CSSProperties;
}

function Skeleton(props: IProps) {
  const { className = "", style } = props;

  return (
    <div
      className={clsx([styles.skeletonBox, className])}
      style={{
        ...style,
      }}
    />
  );
}

export default memo(Skeleton);
