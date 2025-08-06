import { memo } from "react";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { Logo } from "@/shared/ui/Logo";
import styles from "./Header.module.scss";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { useBreakpoint } from "@/shared/lib/hooks/useBreakpoint";
import BarsIcon from "@/shared/assets/icons/bars.svg";

function Header() {
  const breakpoint = useBreakpoint();

  return (
    <header className={styles.header}>
      <Container className={styles.innerContainer}>
        <Flex align="center" justify="space-between" className="bekbol">
          <Logo />
          <Flex gap={`var(--space-large)`} align="center">
            {breakpoint === "desktop" ? (
              <>
                <HeaderMenu />
                <Flex>
                  <span className={styles.border} />
                </Flex>
                <SwitchLang />
              </>
            ) : (
              <Flex className={styles.menuBtn} align="center" justify="center">
                <img src={BarsIcon} alt="menu" />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

export default memo(Header);
