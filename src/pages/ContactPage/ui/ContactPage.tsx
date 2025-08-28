import { ContactMap } from "@/entities/ContactMap";
import { Customers } from "@/entities/Customers";
import { FormSend } from "@/entities/FormSend";
import { Container } from "@/shared/ui/Container";
import { HeadingForSection } from "@/shared/ui/HeadingForSection";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <HeadingForSection title={t("Contacts")} />
        <ContactMap />
        <FormSend />
        <Customers />
      </Container>
    </Section>
  );
}

export default memo(ContactPage);
