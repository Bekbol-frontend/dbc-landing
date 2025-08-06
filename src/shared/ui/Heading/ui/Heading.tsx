import React from "react";
import type { ReactNode } from "react";
import styles from "./Heading.module.scss";
import { clsx } from "@/shared/lib/clsx";

type HeadingType = "h1" | "h2";

interface IProps {
  children?: ReactNode;
  level?: HeadingType;
  className?: string;
}

function Heading(props: IProps) {
  const { children, level = "h1", className = "" } = props;

  return React.createElement(
    level,
    { className: clsx([styles.heading, styles[level], className]) },
    children
  );
}

export default Heading;
