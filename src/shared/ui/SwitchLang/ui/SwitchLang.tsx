import { memo, useCallback, useRef, useState } from "react";
import { Dropdown } from "../../Dropdown";
import { useTranslation } from "react-i18next";
import { useOutside } from "@/shared/lib/hooks/useOutside";

const options = [
  { value: "ru", label: "Русский" },
  { value: "uz", label: "O‘zbek" },
  { value: "qr", label: "Qaraqalpaq" },
  { value: "en", label: "English" },
];

const lang = {
  ru: "Русский",
  uz: "O‘zbek",
  qr: "Qaraqalpaq",
  en: "English",
};

function SwitchLang() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const onSelectLang = useCallback(
    (val: string) => {
      i18n.changeLanguage(val);
      setIsOpen(false);
    },
    [i18n]
  );

  useOutside({ ref, setIsOpen });

  return (
    <Dropdown
      items={options}
      value={lang[i18n.language as keyof typeof lang]}
      isOpen={isOpen}
      onToggle={onToggle}
      onSelect={onSelectLang}
      ref={ref}
    />
  );
}

export default memo(SwitchLang);
