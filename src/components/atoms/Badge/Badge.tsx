import { FC, PropsWithChildren } from 'react';
import { BadgeProps } from './Badge.types';
import { getStyledBadge, BADGE_VARIANTS } from './Badge.utils';

const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  variant = BADGE_VARIANTS.primary,
}) => {
  const { StyledBadge, colors } = getStyledBadge(variant);

  return <StyledBadge colors={colors}>{children}</StyledBadge>;
};

export default Badge;
