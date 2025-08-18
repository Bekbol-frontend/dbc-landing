import { memo } from "react";
import styles from "./FormSend.module.scss";
import Form from "./Form/Form";
import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Desc } from "@/shared/ui/Desc";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import Title from "@/shared/ui/Title/ui/Title";
import { Content } from "@/shared/ui/Content";

function FormSend() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  return (
    <Content id="contact-form">
      <Flex
        className={styles.formSend}
        gap={isMobile ? 30 : 50}
        flexDirection={isMobile ? "column" : "row"}
      >
        <div className={styles.left}>
          {isMobile ? (
            <Title level="h2" className={styles.heading}>
              {t("Do you have a project? Let's chat!")}
            </Title>
          ) : (
            <Heading level="h2" className={styles.heading}>
              {t("Do you have a project? Let's chat!")}
            </Heading>
          )}

          <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
            {t(
              "Fill out the form — we will contact you soon! Let's turn your idea into a successful project together!"
            )}
          </Desc>
        </div>
        <Form />
      </Flex>
    </Content>
  );
}

export default memo(FormSend);
