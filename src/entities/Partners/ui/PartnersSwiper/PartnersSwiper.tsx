import { memo } from "react";
import type { IPartner } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import styles from "./PartnersSwiper.module.scss";
// swiper-css
import "swiper/swiper-bundle.css";
import { baseURL } from "@/shared/api";

interface IProps {
  partners: IPartner[];
}

function PartnersSwiper({ partners }: IProps) {
  console.log(partners);
  return (
    <Swiper
      spaceBetween={5}
      modules={[Autoplay, FreeMode]}
      loop
      freeMode={true}
      speed={7000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {partners.map((el) => (
        <SwiperSlide key={el.name} className={styles.partnersSwiperSlide}>
          <img src={`${baseURL}/${el.logo}`} alt={el.name} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(PartnersSwiper);
