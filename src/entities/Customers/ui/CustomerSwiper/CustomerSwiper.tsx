import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CustomerSwiper.module.scss";
import Quote from "@/shared/assets/icons/quote.svg";

// swiper-css
import "swiper/swiper-bundle.css";
import type { ICustomer } from "../../types";
import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";
import { baseURL } from "@/shared/api";

interface IProps {
  data: ICustomer[];
}

function CustomerSwiper({ data }: IProps) {
  return (
    <Swiper
      slidesPerView={3.8}
      spaceBetween={30}
      modules={[]}
      className={styles.swiperWrapper}
      autoHeight={false}
      breakpoints={{
        300: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.8,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((el) => (
        <SwiperSlide key={el.name} className={styles.item}>
          <Flex flexDirection="column" gap={30} className={styles.flexItem}>
            <img src={Quote} alt="customer" className={styles.quoteImg} />
            <Desc level="mobile" className={styles.desc}>
              {el.feedback}
            </Desc>
            <Flex className={styles.flexBottom} gap={15} align="center">
              <span>
                <img src={`${baseURL}/${el.avatar}`} alt={el.name} />
              </span>
              <Flex flexDirection="column" gap={5}>
                <Desc className={styles.nameDesc}>{el.name}</Desc>
                <Desc level="mobile" className={styles.companyDesc}>
                  {el.company_name}
                </Desc>
              </Flex>
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(CustomerSwiper);
