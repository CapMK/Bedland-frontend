import initialTheme from 'theme/initialTheme';
import { colorNames, ColorNames, HexColor } from 'theme/theme.types';
import {
  ButtonsStyleValueType,
  ButtonVariantProps,
  WrapperProps,
  ButtonWrapperValueType,
  BUTTON_VARIANTS,
  ButtonsStyles,
  ColorVariants,
  ColorVariant,
  StylingProperty,
  HoverVariants,
  AddHoverProps,
} from './Button.types';
import * as Styled from './Button.styled';

const HOVER_VARIANTS: Omit<HoverVariants, 'default'> = {
  text: (hoverColor) => ({
    hoverColor: initialTheme.palette[hoverColor],
  }),
};
export const COLOR_VARIANTS: ColorVariants = {
  orange: {
    primary: {
      bckgColor: initialTheme.palette.orangeDark,
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.orangeLight,
      hoverBorderColor: initialTheme.palette.orangeLight,
    },
    primaryBorders: {
      bckgColor: initialTheme.palette.orangeDark,
      borderColor: initialTheme.palette.light,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.orangeLight,
      hoverBorderColor: initialTheme.palette.light,
    },
    text: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.orangeLight,
      hoverBckgColor: `${initialTheme.palette.orangeLight}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.orangeLight}26`,
      pressedBorderColor: 'transparent',
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.orangeDark,
      hoverBckgColor: `${initialTheme.palette.orangeDark}1A`,
      hoverBorderColor: initialTheme.palette.orangeDark,
    },
  },
  blue: {
    primary: {
      bckgColor: initialTheme.palette.blueDark,
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.blueLight,
      hoverBorderColor: initialTheme.palette.blueLight,
    },
    primaryBorders: {
      bckgColor: initialTheme.palette.blueDark,
      borderColor: initialTheme.palette.light,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.blueLight,
      hoverBorderColor: initialTheme.palette.light,
    },
    text: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.blueDark}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.blueDark}26`,
      pressedBorderColor: 'transparent',
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.blueDark}1A`,
      hoverBorderColor: initialTheme.palette.blueDark,
    },
  },
  white: {
    primary: {
      bckgColor: initialTheme.palette.white,
      borderColor: initialTheme.palette.white,
      color: initialTheme.palette.text,
      hoverColor: initialTheme.palette.text,
      hoverBckgColor: initialTheme.palette.white,
      hoverBorderColor: initialTheme.palette.white,
    },
    primaryBorders: {
      bckgColor: initialTheme.palette.white,
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.blueDark,
      hoverBckgColor: initialTheme.palette.white,
      hoverBorderColor: initialTheme.palette.blueDark,
    },
    text: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.light,
      hoverBckgColor: `${initialTheme.palette.white}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.white}26`,
      pressedBorderColor: 'transparent',
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.white,
      color: initialTheme.palette.light,
      hoverBckgColor: `${initialTheme.palette.white}1A`,
      hoverBorderColor: initialTheme.palette.white,
    },
  },
  noStyleColor: {
    primary: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.orangeLight}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.orangeLight}26`,
      pressedBorderColor: 'transparent',
    },
  },
};

export const BUTTONS_STYLES: ButtonsStyles<typeof Styled.PrimaryButton> = {
  primary: (color) => ({
    StyledButton: Styled.PrimaryButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.primary] as StylingProperty,
  }),
  primaryBorders: (color) => ({
    StyledButton: Styled.PrimaryButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.primaryBorders] as StylingProperty,
  }),
  text: (color) => ({
    StyledButton: Styled.TextButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.text] as StylingProperty,
  }),
  ghost: (color) => ({
    StyledButton: Styled.GhostButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.ghost] as StylingProperty,
  }),
  icon: () => ({
    StyledButton: Styled.IconButton,
    styling: COLOR_VARIANTS.noStyleColor[BUTTON_VARIANTS.primary] as StylingProperty,
  }),
  notificationItem: (color) => ({
    StyledButton: Styled.GhostButton,
    styling: {
      ...(COLOR_VARIANTS[color][BUTTON_VARIANTS.ghost] as StylingProperty),
      paddingTB: 0.3125,
    },
  }),
};

export const getStyledButton = (
  variant: ButtonVariantProps,
  color: ColorVariant,
): ButtonsStyleValueType<typeof Styled.PrimaryButton> => BUTTONS_STYLES[variant](color);

export const getWrapper = ({
  width,
  height,
  marginTop,
}: WrapperProps): ButtonWrapperValueType<typeof Styled.ButtonWrapper> => ({
  ButtonWrapper: Styled.ButtonWrapper,
  styling: {
    width,
    height,
    marginTop,
  },
});

export const getIconColor = (color: HexColor): ColorNames =>
  colorNames.find((key) => initialTheme.palette[key] === color) as ColorNames;

export const addHover = ({ hover, hoverColor, styling }: AddHoverProps) => {
  if (hover === 'default') return { ...styling };

  const hovers = HOVER_VARIANTS[hover](hoverColor);
  return { ...styling, ...hovers };
};
