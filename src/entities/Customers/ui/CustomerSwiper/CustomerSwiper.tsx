import { memo, useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import styles from "./CustomerSwiper.module.scss";
import Quote from "@/shared/assets/icons/quote.svg";

// swiper-css
import "swiper/swiper-bundle.css";

import type { ICustomer } from "../../types";
import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";
import { baseURL } from "@/shared/api";
import { Navigation } from "swiper/modules";

import NextIcon from "@/shared/assets/icons/next.svg";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  data: ICustomer[];
}

function CustomerSwiper({ data }: IProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      slidesPerView={3.7}
      spaceBetween={30}
      navigation={false}
      modules={[Navigation]}
      className={styles.swiperWrapper}
      ref={swiperRef}
      breakpoints={{
        300: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.7,
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

      {data.length && (
        <div className={styles.navWrapper}>
          <span
            className={clsx([styles.navSpan, styles.rotate])}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <img src={NextIcon} alt="prev" />
          </span>
          <span
            className={styles.navSpan}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <img src={NextIcon} alt="next" />
          </span>
        </div>
      )}
    </Swiper>
  );
}

export default memo(CustomerSwiper);
