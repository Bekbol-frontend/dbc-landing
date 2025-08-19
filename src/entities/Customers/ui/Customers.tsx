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

function Customers() {
  const { isMobile } = useResponsive();
  const { customer } = useAppContext();

  const { data: customerData, error, loading } = customer;

  if (error) return <ErrorTitle error={error} />;

  return (
    <Content>
      {isMobile ? (
        <Title level="h2" className={styles.title}>
          Mijozlarimizning biz haqimizda fikrlari
        </Title>
      ) : (
        <Heading level="h2" className={styles.title}>
          Mijozlarimizning biz haqimizda fikrlari
        </Heading>
      )}
      <Desc className={styles.desc} level={isMobile ? "mobile" : "desktop"}>
        Bizning 10 yildan ortiq mukammal xizmatlarimiz uchun, ishonch bildirgan
        mijozlarimiz fikrlarini qadrlaymiz !
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
