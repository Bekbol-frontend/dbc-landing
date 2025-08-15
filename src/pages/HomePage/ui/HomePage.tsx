import { memo } from "react";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Banner } from "@/entities/Banner";
import { Partners } from "@/entities/Partners";
import { OurAdvantages } from "@/entities/OurAdvantages";
import { OurServices } from "@/entities/OurServices";
import { Projects } from "@/entities/Projects";
import { FormSend } from "@/entities/FormSend";
import { Company } from "@/entities/Company";

function HomePage() {
  return (
    <Section>
      <Container>
        <Banner />
        <Partners />
        <OurAdvantages />
        <OurServices />
        <Projects />
        <Company />
        <FormSend />
      </Container>
    </Section>
  );
}

export default memo(HomePage);
