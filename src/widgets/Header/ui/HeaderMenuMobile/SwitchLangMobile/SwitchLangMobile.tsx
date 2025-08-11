import { memo, useCallback } from "react";
import styles from "./SwitchLangMobile.module.scss";
import { useTranslation } from "react-i18next";
import { clsx } from "@/shared/lib/clsx";

const langs = [
  { id: 1, lang: "O‘ZB", value: "uz" },
  { id: 2, lang: "RUS", value: "ru" },
  { id: 3, lang: "Qar", value: "qr" },
  { id: 4, lang: "ENG", value: "en" },
];

function SwitchLangMobile() {
  const { t, i18n } = useTranslation();

  const onChangeLang = useCallback(
    (val: string) => i18n.changeLanguage(val),
    [i18n]
  );

  return (
    <div className={styles.switchLangMobile}>
      <span className={styles.spanLang}>{t("Select a language")}</span>
      <div className={styles.grid}>
        {langs.map((el) => (
          <button
            key={el.id}
            className={clsx([styles.btn], {
              [styles.active]: el.value === i18n.language,
            })}
            onClick={() => onChangeLang(el.value)}
          >
            {el.lang}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(SwitchLangMobile);
