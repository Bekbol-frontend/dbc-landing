import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";

function HomePage() {
  return (
    <Section>
      <Container>
        <h1>HomePage</h1>
      </Container>
    </Section>
  );
}

export default memo(HomePage);
