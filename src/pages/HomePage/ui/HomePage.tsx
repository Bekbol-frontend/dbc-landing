import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";
import Banner from "./Banner/Banner";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import BannerMobile from "./BannerMobile/BannerMobile";

function HomePage() {
  const { isMobile } = useResponsive();

  return (
    <Section>
      <Container>{isMobile ? <BannerMobile /> : <Banner />}</Container>
    </Section>
  );
}

export default memo(HomePage);
