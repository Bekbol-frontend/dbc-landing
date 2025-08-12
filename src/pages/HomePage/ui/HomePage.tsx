import { memo } from "react";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Banner } from "@/entities/Banner";
import { Partners } from "@/entities/Partners";
import { OurAdvantages } from "@/entities/OurAdvantages";

function HomePage() {
  return (
    <Section>
      <Container>
        <Banner />
        <Partners />
        <OurAdvantages />
      </Container>
    </Section>
  );
}

export default memo(HomePage);
