import { memo } from "react";
import Title from "../../Title/ui/Title";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import styles from "./SectionTitle.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  title: string;
  className?: string;
}

function SectionTitle({ title, className = "" }: IProps) {
  const { isMobile } = useResponsive();

  return (
    <Title
      className={clsx([styles.title, className])}
      level={isMobile ? "h2" : "h1"}
    >
      {title}
    </Title>
  );
}

export default memo(SectionTitle);
