import { memo } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./ContactMap.module.scss";
import MapPoint from "@/shared/assets/icons/mapPoint.svg";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  lat: number;
  lng: number;
}

function ContactMap({ lat, lng }: IProps) {
  const { isMobile } = useResponsive();

  return (
    <div className={styles.contactPage}>
      <YMaps>
        <Map
          defaultState={{
            center: [lat, lng],
            zoom: 14,
          }}
          width="100%"
          height={isMobile ? "350px" : "600px"}
        >
          <Placemark
            geometry={[lat, lng]}
            options={{
              iconLayout: "default#image",
              iconImageHref: MapPoint,
              iconImageSize: isMobile ? [30, 41] : [60, 81],
              iconImageOffset: isMobile ? [-15, -41] : [-30, -81],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default memo(ContactMap);
