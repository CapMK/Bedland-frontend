import { ButtonHTMLAttributes } from 'react';
import { ColorNames, HexColor } from 'theme/theme.types';
import { IconName } from '../Icon/icon.types';

export const ButtonVariants = [
  'primary',
  'primaryBorders',
  'text',
  'ghost',
  'icon',
  'notificationItem',
] as const;
export const buttonColors = ['orange', 'blue', 'white'] as const;
export const hoverVariants = ['default', 'text'] as const;

type ButtonVariantsType = {
  [key in (typeof ButtonVariants)[number]]: key;
};
export const BUTTON_VARIANTS: ButtonVariantsType = {
  primary: 'primary',
  primaryBorders: 'primaryBorders',
  text: 'text',
  ghost: 'ghost',
  icon: 'icon',
  notificationItem: 'notificationItem',
} as const;

export type ColorVariant = (typeof buttonColors)[number];
export type HoverVariant = (typeof hoverVariants)[number];

export type ButtonVariantProps = (typeof ButtonVariants)[number];
export type WrapperProps = {
  wrapper?: true;
  width?: number;
  height?: number;
  marginTop?: number;
};
type WrapperPropsNever = {
  wrapper?: never;
  width?: never;
  height?: never;
  marginTop?: never;
};

export type IconProps = { icon?: IconName | null; iconSize?: number; iconColor?: ColorNames };

type BasicProps<T extends ButtonVariantProps> = {
  variant: T;
  hover?: HoverVariant;
  hoverColor?: ColorNames;
  color?: ColorVariant;
};
type BasicPropsNever = { variant?: never; hover?: never; hoverColor?: never; color?: never };
export type ButtonWrapperProps = BasicPropsNever & WrapperProps & IconProps;

export type PrimaryButtonProps = BasicProps<typeof BUTTON_VARIANTS.primary> &
  WrapperPropsNever &
  IconProps;

export type PrimaryBordersButtonProps = BasicProps<typeof BUTTON_VARIANTS.primaryBorders> &
  WrapperPropsNever &
  IconProps;

export type TextButtonProps = BasicProps<typeof BUTTON_VARIANTS.text> &
  WrapperPropsNever &
  IconProps;

export type GhostButtonProps = BasicProps<typeof BUTTON_VARIANTS.ghost> &
  WrapperPropsNever &
  IconProps;

export type IconButtonProps = BasicProps<typeof BUTTON_VARIANTS.icon> &
  WrapperPropsNever &
  IconProps;

export type NotificationItemButtonProps = BasicProps<typeof BUTTON_VARIANTS.notificationItem> &
  WrapperPropsNever &
  IconProps;

export type ButtonProps = (
  | PrimaryButtonProps
  | PrimaryBordersButtonProps
  | TextButtonProps
  | GhostButtonProps
  | IconButtonProps
  | ButtonWrapperProps
  | NotificationItemButtonProps
) &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type HoverProperties = {
  hoverColor: HexColor;
  hoverBckgColor: HexColor | 'transparent';
  hoverBorderColor: HexColor | 'transparent';
};

export type StylingProperty = {
  bckgColor: HexColor | 'transparent';
  borderColor: HexColor | 'transparent';
  color: HexColor;
  paddingTB?: number;
  pressedBckgColor?: HexColor | 'transparent';
  pressedBorderColor?: HexColor | 'transparent';
} & Partial<HoverProperties>;

export type StylingProps = {
  styling: StylingProperty;
};

export type HoverVariants = {
  [hoverVariant in (typeof hoverVariants)[number]]: (
    hoverColor: ColorNames,
  ) => Partial<HoverProperties>;
};

export type ColorVariants = {
  [color in ColorVariant | 'noStyleColor']: {
    [variant in ButtonVariantProps]?: StylingProperty;
  };
};

export type StyledWrapperProps = {
  styling: WrapperProps;
};

export type ButtonWrapperValueType<T> = {
  ButtonWrapper: T;
} & StyledWrapperProps;

export type ButtonsStyleValueType<T> = {
  StyledButton: T;
} & StylingProps;

export type ButtonsStyles<T> = {
  [key2 in ButtonVariantProps]: (color: ColorVariant) => ButtonsStyleValueType<T>;
};

export type ButtonsStyleType<T> = {
  [key in keyof ButtonVariantsType]: ButtonsStyleValueType<T>;
};

export const IsIconNullGuard = (icon: null | IconName): icon is null => icon === null;

export type AddHoverProps = {
  hover: HoverVariant;
  hoverColor: ColorNames;
  styling: StylingProperty;
};
