import { HexColor } from 'theme/theme.types';

export const BadgeVariants = ['primary', 'secondary', 'danger', 'warning'] as const;

export type BadgeVariantProps = (typeof BadgeVariants)[number];

export type BadgeVariantsType = { [key in BadgeVariantProps]: key };

export type BadgeProps = {
  variant: BadgeVariantProps;
};
export type StyledBadgePropses = {
  colors: {
    bgColor: HexColor;
    color: HexColor;
    borderColor: HexColor | 'transparent';
  };
};
