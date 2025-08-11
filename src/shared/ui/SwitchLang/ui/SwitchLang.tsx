import { memo, useCallback, useRef, useState } from "react";
import { Dropdown } from "../../Dropdown";
import { useTranslation } from "react-i18next";
import { useOutside } from "@/shared/lib/hooks/useOutside";

const options = [
  { value: "ru", label: "Рус" },
  { value: "uz", label: "O‘zb" },
  { value: "qr", label: "Qar" },
  { value: "en", label: "Eng" },
];

const lang = {
  ru: "Рус",
  uz: "O‘zb",
  qr: "Qar",
  en: "Eng",
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
