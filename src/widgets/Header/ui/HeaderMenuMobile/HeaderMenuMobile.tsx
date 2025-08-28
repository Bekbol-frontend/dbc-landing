import { memo } from "react";
import styles from "./HeaderMenuMobile.module.scss";
import SwitchLangMobile from "./SwitchLangMobile/SwitchLangMobile";
import { clsx } from "@/shared/lib/clsx";
import { EmailAndPhone } from "@/entities/EmailAndPhone";
import { Links } from "@/entities/Links";

interface IProps {
  isOpen: boolean;
  onCloseMenu: () => void;
}

function HeaderMenuMobile({ isOpen, onCloseMenu }: IProps) {
  return (
    <div className={clsx([styles.headerMenuMobile], { [styles.show]: isOpen })}>
      <div className={styles.inner}>
        <Links onCloseMenu={onCloseMenu}/>
        <span className={styles.spanBorder} />
        <EmailAndPhone />
        <span className={styles.spanBorder} />
        <SwitchLangMobile />
      </div>
    </div>
  );
}

export default memo(HeaderMenuMobile);
