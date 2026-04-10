import type React from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import type { DirectionType, SkeletonType } from "@/shared/interfaces";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

export const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  count?: number,
) => {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, direction = 'column', ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component type={type} {...(restProps as P)} />;
  };
};
