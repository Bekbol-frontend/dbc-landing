import { memo } from "react";
import { OurServices } from "@/entities/OurServices";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";
import { HeadingForSection } from "@/shared/ui/HeadingForSection";

function ServicesPage() {
  return (
    <Section>
      <Container>
        <HeadingForSection title="Services" />
        <OurServices notTitle />
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ServicesPage);
