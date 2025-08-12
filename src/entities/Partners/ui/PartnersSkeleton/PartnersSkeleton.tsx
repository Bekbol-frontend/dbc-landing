import { memo } from "react";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function PartnersSkeleton() {
  const { isMobile } = useResponsive();

  return (
    <Flex gap={5}>
      {Array(isMobile ? 3 : 4)
        .fill("")
        .map((_, i) => (
          <Skeleton
            key={i}
            style={{
              height: isMobile ? 100 : 167,
              borderRadius: `var(--radius-medium)`,
              flex: 1,
            }}
          />
        ))}
    </Flex>
  );
}

export default memo(PartnersSkeleton);
