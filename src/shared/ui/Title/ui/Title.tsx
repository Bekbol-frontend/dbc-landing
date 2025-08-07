import React from "react";
import type { ReactNode } from "react";
import styles from "./Title.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children?: ReactNode;
  level?: "h1" | "h2";
  className?: string;
}

function Title(props: IProps) {
  const { children, level = "h1", className = "" } = props;

  return React.createElement(
    level,
    { className: clsx([styles.title, styles[level], className]) },
    children
  );
}

export default Title;
