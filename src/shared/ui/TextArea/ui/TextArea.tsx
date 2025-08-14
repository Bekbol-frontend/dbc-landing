import { memo, type ComponentProps } from "react";
import styles from "./TextArea.module.scss";
import { Flex } from "../../Flex";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends ComponentProps<"textarea"> {
  error?: string;
}

function TextArea(props: IProps) {
  const { error, className = "", ...otherProps } = props;

  return (
    <Flex flexDirection="column" gap={5} className={styles.textAreaWrapper}>
      <textarea
        className={clsx([styles.textArea, className])}
        {...otherProps}
      />
      {error && <span className={styles.errorSpan}>{error}</span>}
    </Flex>
  );
}

export default memo(TextArea);
