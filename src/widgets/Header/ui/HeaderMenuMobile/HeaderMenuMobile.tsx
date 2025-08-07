import { memo } from "react";
import styles from "./HeaderMenuMobile.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import SwitchLangMobile from "./SwitchLangMobile/SwitchLangMobile";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  isOpen: boolean;
}

function HeaderMenuMobile({ isOpen }: IProps) {
  return (
    <div className={clsx([styles.headerMenuMobile], { [styles.show]: isOpen })}>
      <div className={styles.inner}>
        <Flex flexDirection="column" gap={15}>
          <Link to={routePaths.Home} className={styles.menuLink}>
            Xizmatlar
          </Link>
          <Link to={routePaths.Home} className={styles.menuLink}>
            Loyihalar
          </Link>
          <Link to={routePaths.Home} className={styles.menuLink}>
            Bizning jamoa
          </Link>
          <Link to={routePaths.Home} className={styles.menuLink}>
            Kontaktlar
          </Link>
        </Flex>

        <span className={styles.spanBorder} />

        <Flex flexDirection="column" gap={15}>
          <Flex
            flexDirection="column"
            gap={15}
            flex={1}
            style={{
              width: "100%",
            }}
          >
            <span className={styles.spanLabel}>E-mail</span>
            <a href="mailto:info@data.com" className={styles.phoneAndEmailLink}>
              info@data.com
            </a>
          </Flex>
          <Flex
            flexDirection="column"
            gap={15}
            flex={1}
            style={{
              width: "100%",
            }}
          >
            <span className={styles.spanLabel}>Telefon raqam</span>
            <a
              href="tel:+998 90 123 45 67"
              className={styles.phoneAndEmailLink}
            >
              +998 90 123 45 67
            </a>
          </Flex>
        </Flex>

        <span className={styles.spanBorder} />

        <SwitchLangMobile />
      </div>
    </div>
  );
}

export default memo(HeaderMenuMobile);
