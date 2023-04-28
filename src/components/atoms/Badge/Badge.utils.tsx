import initialTheme from 'theme/initialTheme';
import { StyledBadgePropses, BadgeVariantsType, BadgeVariantProps } from './Badge.types';
import * as Styled from './Badge.styled';

export const BADGE_VARIANTS: BadgeVariantsType = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  warning: 'warning',
} as const;

type BadgeStyleAndColorsValueType = {
  StyledBadge: typeof Styled.PrimaryBadge;
  colors: StyledBadgePropses['colors'];
};

type BadgeStyleAndColorsType = {
  [key in keyof BadgeVariantsType]: BadgeStyleAndColorsValueType;
};

const badgeStyleAndColors: BadgeStyleAndColorsType = {
  [BADGE_VARIANTS.primary]: {
    StyledBadge: Styled.PrimaryBadge,
    colors: {
      bgColor: initialTheme.palette.greenDark,
      borderColor: 'transparent',
      color: initialTheme.palette.white,
    },
  },
  [BADGE_VARIANTS.secondary]: {
    StyledBadge: Styled.SecondaryBadge,

    colors: {
      bgColor: initialTheme.palette.greyLight,
      borderColor: initialTheme.palette.sidebarTabs,
      color: initialTheme.palette.greyDark,
    },
  },
  [BADGE_VARIANTS.danger]: {
    StyledBadge: Styled.DangerBadge,

    colors: {
      bgColor: initialTheme.palette.redLight,
      borderColor: 'transparent',
      color: initialTheme.palette.white,
    },
  },
  [BADGE_VARIANTS.warning]: {
    StyledBadge: Styled.WarningBadge,
    colors: {
      bgColor: initialTheme.palette.yellow,
      borderColor: 'transparent',
      color: initialTheme.palette.text,
    },
  },
};

export const getStyledBadge = (
  badgeType: BadgeVariantProps = BADGE_VARIANTS.primary,
): BadgeStyleAndColorsValueType => badgeStyleAndColors[badgeType];
