import type { IOurAdvantages } from "../types";
import OurImg1 from "@/shared/assets/advantages/1.svg";
import OurImg2 from "@/shared/assets/advantages/2.svg";
import OurImg3 from "@/shared/assets/advantages/3.svg";
import OurImg4 from "@/shared/assets/advantages/4.svg";

export const ourAdvantages: IOurAdvantages[] = [
  {
    id: 1,
    imgUrl: OurImg1,
    title: "Deep expertise",
    subTitle: "10+ years of experience in automating business solutions",
  },
  {
    id: 2,
    imgUrl: OurImg2,
    title: "Comprehensive approach",
    subTitle: "CRM, ERP, POS, IoT, video surveillance, bot services",
  },
  {
    id: 3,
    imgUrl: OurImg3,
    title: "Reliable technical support",
    subTitle: "Fast response and 24/7 technical support",
  },
  {
    id: 4,
    imgUrl: OurImg4,
    title: "Affordable prices",
    subTitle: "Transparent pricing policy without hidden fees",
  },
];
