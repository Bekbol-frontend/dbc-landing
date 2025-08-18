import { memo, useEffect, useState } from "react";
import { Content } from "@/shared/ui/Content";
import { Heading } from "@/shared/ui/Heading";
import styles from "./Customers.module.scss";
import { Desc } from "@/shared/ui/Desc";
import type { ICustomer } from "../types";
import { API } from "@/shared/api";
import type { AxiosError } from "axios";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";
import type { IData } from "@/shared/types/data";
import CustomerSwiper from "./CustomerSwiper/CustomerSwiper";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import Title from "@/shared/ui/Title/ui/Title";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerData, setCustomerData] = useState<ICustomer[]>([]);

  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
    const getCustomerData = async () => {
      try {
        const res = await API.get<IData<ICustomer[]>>("/api/feedbacks");
        if (!res.data.data) return new Error("Error");

        setCustomerData(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCustomerData();
  }, []);

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
      <CustomerSwiper data={customerData} />
    </Content>
  );
}

export default memo(Customers);
