import {
  memo,
  useCallback,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./Form.module.scss";
import { Input } from "@/shared/ui/Input";
import { TextArea } from "@/shared/ui/TextArea";
import { Flex } from "@/shared/ui/Flex";
import { Button } from "@/shared/ui/Button";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { useTranslation } from "react-i18next";
import { API } from "@/shared/api";
import type { AxiosError } from "axios";
import type { IData } from "@/shared/types/data";
import { Desc } from "@/shared/ui/Desc";

function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState("");

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");

  const { isMobile } = useResponsive();
  const { t, i18n } = useTranslation();

  const onChangeFullName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setFullName(value);

      if (!value) {
        setFullNameError(t("Enter your name"));
      } else {
        setFullNameError("");
      }
    },
    [t]
  );

  const onChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const regex = /^\d*\.?\d*$/;

      if (regex.test(value) || value === "") {
        setPhone(value);
      }

      if (!value) {
        setPhoneError(t("Your phone number"));
      } else {
        setPhoneError("");
      }
    },
    [t]
  );

  const onChangeText = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setText(value);

      if (!value) {
        setTextError(t("Write a brief description of your project..."));
      } else {
        setTextError("");
      }
    },
    [t]
  );

  const submitForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!fullName && !phone && !text) {
        setFullNameError(t("Enter your name"));
        setPhoneError(t("Your phone number"));
        setTextError(t("Write a brief description of your project..."));
        return;
      }

      if (!fullName) {
        setFullNameError(t("Enter your name"));
      }

      if (!phone) {
        setPhoneError(t("Your phone number"));
      }

      if (!text) {
        setTextError(t("Write a brief description of your project..."));
      }

      if (!fullName || !phone || !text) return;

      setLoading(true);

      const data = {
        full_name: fullName,
        phone,
        about_the_project: text,
      };

      API.post<{ message: string }>("/api/form", data, {
        headers: {
          "Accept-Language": i18n.language,
        },
      })
        .then((res: IData<{ message: string }>) => {
          setResult(res.data.message);
        })
        .catch((error) => {
          const err = error as AxiosError;
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [fullName, phone, text, t, i18n.language]
  );

  return (
    <div className={styles.formBlock}>
      <form className={styles.form} onSubmit={submitForm}>
        <Flex
          gap={isMobile ? 15 : 30}
          flexDirection="column"
          className={styles.flex}
        >
          <Input
            placeholder={t("Your Name Last Name")}
            value={fullName}
            onChange={onChangeFullName}
            error={fullNameError}
          />
          <Input
            placeholder={`${t("Your phone number")} 905744066`}
            value={phone}
            onChange={onChangePhone}
            error={phoneError}
          />
          <TextArea
            placeholder={t("Write a brief description of your project...")}
            value={text}
            onChange={onChangeText}
            error={textError}
          />
          {result && (
            <Desc
              level={isMobile ? "mobile" : "desktop"}
              className={styles.descSuccessfully}
            >
              {t(result)}
            </Desc>
          )}
          {error && (
            <Desc
              className={styles.descError}
              level={isMobile ? "mobile" : "desktop"}
            >
              {error}
            </Desc>
          )}
          <Button
            size={isMobile ? "mobile" : "default"}
            className={styles.btn}
            disabled={loading}
          >
            {loading ? t("Loading...") : t("Send a message")}
          </Button>
        </Flex>
      </form>
    </div>
  );
}

export default memo(Form);
