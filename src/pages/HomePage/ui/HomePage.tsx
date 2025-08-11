import { Banner } from "@/entities/Banner";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";

function HomePage() {
  return (
    <Section>
      <Container>
        <Banner />
      </Container>
    </Section>
  );
}

export default memo(HomePage);
