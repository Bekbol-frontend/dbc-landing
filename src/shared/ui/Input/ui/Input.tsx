import { memo, type ComponentProps } from "react";
import styles from "./Input.module.scss";
import { Flex } from "../../Flex";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends ComponentProps<"input"> {
  error?: string;
}

function Input(props: IProps) {
  const { error, className = "", ...otherProps } = props;

  return (
    <Flex flexDirection="column" gap={5} className={styles.inputWrapper}>
      <input
        type="text"
        className={clsx([styles.input, className])}
        {...otherProps}
      />
      {error && <span className={styles.errorSpan}>{error}</span>}
    </Flex>
  );
}

export default memo(Input);
