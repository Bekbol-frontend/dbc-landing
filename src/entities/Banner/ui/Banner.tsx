import { memo, useEffect, useState } from "react";
import type { IBanner } from "../types";
import { API, baseURL } from "@/shared/api";
import type { IData } from "@/shared/types/data";
import type { AxiosError } from "axios";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import styles from "./Banner.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ErrorTitle } from "@/shared/ui/ErrorTitle";

function Banner() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [banner, setBanner] = useState<IBanner | null>(null);

  const { isMobile } = useResponsive();

  useEffect(() => {
    setLoading(true);
    const getBanner = async () => {
      try {
        const res = await API.get<IData<IBanner>>("/api/banner");

        if (!res.data.data) throw new Error("Error server");

        setBanner(res.data.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBanner();
  }, []);

  if (loading)
    return (
      <Skeleton
        style={{
          borderRadius: "var(--radius-large)",
          height: isMobile ? "500px" : "764px",
        }}
      />
    );

  if (error) return <ErrorTitle error={error} />;

  return (
    banner && (
      <div
        style={{
          backgroundImage: `url(${baseURL}/${
            isMobile ? banner.mobile_image : banner.desktop_image
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.banner}
      ></div>
    )
  );
}

export default memo(Banner);
