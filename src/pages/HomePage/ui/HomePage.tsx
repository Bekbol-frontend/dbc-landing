import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";
import Banner from "./Banner/Banner";

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
