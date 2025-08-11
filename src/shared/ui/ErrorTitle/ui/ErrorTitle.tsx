import { memo } from "react";
import Title from "../../Title/ui/Title";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function ErrorTitle({ error }: { error: string | null }) {
  const { isMobile } = useResponsive();

  return (
    <Title danger level={isMobile ? "h2" : "h1"}>
      {error}
    </Title>
  );
}

export default memo(ErrorTitle);
