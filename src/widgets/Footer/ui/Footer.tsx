import { memo } from "react";
import { Container } from "@/shared/ui/Container";
import { Content } from "@/shared/ui/Content";
import styles from "./Footer.module.scss";
import { Flex } from "@/shared/ui/Flex";
import Title from "@/shared/ui/Title/ui/Title";
import { EmailAndPhone } from "@/entities/EmailAndPhone";
import { Links } from "@/entities/Links";
import { Desc } from "@/shared/ui/Desc";
import { useAppContext } from "@/app/Provider/StoreProvider";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import { baseURL } from "@/shared/api";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";

function Footer() {
  const { error, footerData, loading } = useAppContext();
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  if (error) return <ErrorTitle error={error} />;

  if (!footerData) return null;

  return (
    <footer className={styles.footer}>
      <Container>
        <Content>
          <Flex
            className={styles.flex}
            flexDirection={isMobile ? "column" : "row"}
          >
            <div className={styles.left}>
              <Title level="h2" className={styles.title}>
                {t(
                  "Not just a service – we offer a solution for your project."
                )}
              </Title>

              {!isMobile && <EmailAndPhone />}
            </div>
            <div className={styles.right}>
              <Links />
            </div>
            {isMobile && <EmailAndPhone className={styles.emailAndPhone} />}
          </Flex>

          <Flex
            className={styles.flexBottom}
            align={isMobile ? "flex-start" : "center"}
            justify={isMobile ? "flex-start" : "space-between"}
            gap={30}
            flexDirection={isMobile ? "column" : "row"}
          >
            <div className={styles.leftBottom}>
              <Desc level="mobile" className={styles.desc}>
                © {new Date().getFullYear()} DBC. {t("All rights reserved.")}
              </Desc>
            </div>
            <div className={styles.rightBottom}>
              <Flex className={styles.socLinks} gap={15}>
                {loading
                  ? Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <Skeleton
                          key={i}
                          className={styles.socLinksItemSkeleton}
                        />
                      ))
                  : footerData.social_links.map((el, i) => (
                      <a
                        href={el.url}
                        key={i}
                        className={styles.socLinksItem}
                        target="_blank"
                      >
                        <img
                          src={`${baseURL}/storage/${el.icon}`}
                          alt={el.url}
                        />
                      </a>
                    ))}
              </Flex>
            </div>
          </Flex>
        </Content>
      </Container>
    </footer>
  );
}

export default memo(Footer);
