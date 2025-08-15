import { clsx } from "@/shared/lib/clsx";
import styles from "./Content.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function Content({ children, className = "" }: IProps) {
  return <div className={clsx([styles.content, className])}>{children}</div>;
}

export default Content;
