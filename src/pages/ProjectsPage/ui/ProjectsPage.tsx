import { memo } from "react";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { FormSend } from "@/entities/FormSend";
import { Customers } from "@/entities/Customers";
import { Projects } from "@/entities/Projects";
import { HeadingForSection } from "@/shared/ui/HeadingForSection";

function ProjectsPage() {
  return (
    <Section>
      <Container>
        <HeadingForSection title="Services" />

        <Projects />
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ProjectsPage);
