import { memo, useMemo, type RefObject } from "react";
import styles from "./Dropdown.module.scss";
import { Flex } from "../../Flex";
import Down from "@/shared/assets/icons/down.svg";
import { clsx } from "@/shared/lib/clsx";
import type { IOption } from "../model/types";

interface IPoprs {
  items: IOption[];
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (val: string) => void;
  className?: string;
  ref: RefObject<HTMLDivElement | null>;
}

function Dropdown({
  items,
  value,
  isOpen,
  onToggle,
  onSelect,
  className = "",
  ref,
}: IPoprs) {
  const filterLangs = useMemo(
    () => items.filter((el) => el.label !== value),
    [items, value]
  );

  const optionEl = useMemo(
    () =>
      filterLangs.map((el) => (
        <div key={el.value} onClick={() => onSelect(el.value)}>
          {el.label}
        </div>
      )),
    [filterLangs]
  );

  return (
    <div
      className={clsx([styles.dropdown, className], { [styles.show]: isOpen })}
      ref={ref}
    >
      <Flex className={styles.top} align="center" gap={5} onClick={onToggle}>
        {value} <img src={Down} alt="down" />
      </Flex>
      <div className={styles.bottom}>{optionEl}</div>
    </div>
  );
}

export default memo(Dropdown);
