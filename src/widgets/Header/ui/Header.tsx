import { memo, useCallback, useEffect, useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { Logo } from "@/shared/ui/Logo";
import styles from "./Header.module.scss";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import BarsIcon from "@/shared/assets/icons/bars.svg";
import XIcon from "@/shared/assets/icons/x.svg";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import HeaderMenuMobile from "./HeaderMenuMobile/HeaderMenuMobile";

function Header() {
  const [menu, setMenu] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  const onCloseMenu = useCallback(() => {
    setMenu(false);
  }, []);

  return (
    <header className={styles.header}>
      <Container className={styles.innerContainer}>
        <Flex align="center" justify="space-between" className="bekbol">
          <Logo />
          <Flex gap={`var(--space-large)`} align="center">
            {!isMobile ? (
              <>
                <HeaderMenu />
                <Flex>
                  <span className={styles.border} />
                </Flex>
                <SwitchLang />
              </>
            ) : (
              <Flex
                className={styles.menuBtn}
                align="center"
                justify="center"
                onClick={() => setMenu(!menu)}
              >
                <img src={menu ? XIcon : BarsIcon} alt="menu" />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
      <HeaderMenuMobile isOpen={menu} onCloseMenu={onCloseMenu} />
    </header>
  );
}

export default memo(Header);
