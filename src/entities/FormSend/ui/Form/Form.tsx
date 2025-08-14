import { memo } from "react";
import styles from "./Form.module.scss";
import { Input } from "@/shared/ui/Input";
import { TextArea } from "@/shared/ui/TextArea";
import { Flex } from "@/shared/ui/Flex";
import { Button } from "@/shared/ui/Button";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";

function Form() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <div className={styles.formBlock}>
      <form className={styles.form}>
        <Flex
          gap={isMobile ? 15 : 30}
          flexDirection="column"
          className={styles.flex}
        >
          <Input placeholder={t("Your Name Last Name")} />
          <Input placeholder={t("Your phone number")} />
          <TextArea
            placeholder={t("Write a brief description of your project...")}
          />
          <Button size={isMobile ? "mobile" : "default"} className={styles.btn}>
            {t("Send a message")}
          </Button>
        </Flex>
      </form>
    </div>
  );
}

export default memo(Form);
