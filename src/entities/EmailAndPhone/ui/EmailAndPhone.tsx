import { memo } from "react";
import { Flex } from "@/shared/ui/Flex";
import styles from "./EmailAndPhone.module.scss";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { clsx } from "@/shared/lib/clsx";
import { useAppContext } from "@/app/Provider/StoreProvider";

interface IProps {
  className?: string;
}

function EmailAndPhone({ className = "" }: IProps) {
  const { isMobile } = useResponsive();

  const { footerData } = useAppContext();

  return (
    <Flex
      flexDirection={isMobile ? "column" : "row"}
      gap={15}
      className={clsx([className])}
    >
      <Flex
        flexDirection="column"
        gap={15}
        flex={1}
        style={{
          width: "100%",
        }}
      >
        <span className={styles.spanLabel}>E-mail</span>
        <a
          href={`mailto:${footerData?.email}`}
          className={styles.phoneAndEmailLink}
        >
          {footerData?.email}
        </a>
      </Flex>
      <Flex
        flexDirection="column"
        gap={15}
        flex={1}
        style={{
          width: "100%",
        }}
      >
        <span className={styles.spanLabel}>Telefon raqam</span>
        <a
          href={`tel:${footerData?.phone}`}
          className={styles.phoneAndEmailLink}
        >
          {footerData?.phone}
        </a>
      </Flex>
    </Flex>
  );
}

export default memo(EmailAndPhone);
