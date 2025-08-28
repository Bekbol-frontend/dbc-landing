import { memo } from "react";
import { Content } from "@/shared/ui/Content";
import { Heading } from "@/shared/ui/Heading";
import styles from "./Customers.module.scss";
import { Desc } from "@/shared/ui/Desc";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import CustomerSwiper from "./CustomerSwiper/CustomerSwiper";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import Title from "@/shared/ui/Title/ui/Title";
import { useAppContext } from "@/app/Provider/StoreProvider";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useTranslation } from "react-i18next";

function Customers() {
  const { isMobile } = useResponsive();
  const { customer } = useAppContext();
  const { t } = useTranslation();

  const { data: customerData, error, loading } = customer;

  if (error) return <ErrorTitle error={error} />;

  return (
    <Content>
      {isMobile ? (
        <Title level="h2" className={styles.title}>
          {t("Our customers' opinions about us")}
        </Title>
      ) : (
        <Heading level="h2" className={styles.title}>
          {t("Our customers' opinions about us")}
        </Heading>
      )}
      <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
        {t(
          "We value the opinions of our customers who have trusted us for over 10 years of excellent service!"
        )}
      </Desc>
      {loading ? (
        <div className={styles.skeletonGrid}>
          {Array(4)
            .fill("")
            .map((_, i) => (
              <Skeleton key={i} className={styles.skeletonItem} />
            ))}
        </div>
      ) : (
        <CustomerSwiper data={customerData} />
      )}
    </Content>
  );
}

export default memo(Customers);
