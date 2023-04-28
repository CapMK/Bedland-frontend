import { PropsWithChildren } from 'react';
import { cleanup } from '@testing-library/react';
import initialTheme from 'theme/initialTheme';
import { renderWithProviders } from 'utils/test.utils';
import Button from './Button';
import {
  addHover,
  BUTTONS_STYLES,
  getIconColor,
  getStyledButton,
  getWrapper,
} from './Button.utils';
import {
  ButtonProps,
  BUTTON_VARIANTS,
  ButtonVariantProps,
  ColorVariant,
  IconProps,
} from './Button.types';
import * as Styled from './Button.styled';

type BasicButtonVariant = { variant: ButtonVariantProps; color: ColorVariant };

const variantsColorsVariations: BasicButtonVariant[] = [
  { variant: BUTTON_VARIANTS.primary, color: 'orange' },
  { variant: BUTTON_VARIANTS.primary, color: 'blue' },
  { variant: BUTTON_VARIANTS.primary, color: 'white' },
  { variant: BUTTON_VARIANTS.ghost, color: 'orange' },
  { variant: BUTTON_VARIANTS.ghost, color: 'blue' },
  { variant: BUTTON_VARIANTS.ghost, color: 'white' },
  { variant: BUTTON_VARIANTS.text, color: 'orange' },
  { variant: BUTTON_VARIANTS.text, color: 'blue' },
  { variant: BUTTON_VARIANTS.text, color: 'white' },
  { variant: BUTTON_VARIANTS.notificationItem, color: 'orange' },
  { variant: BUTTON_VARIANTS.notificationItem, color: 'blue' },
  { variant: BUTTON_VARIANTS.notificationItem, color: 'white' },
  { variant: BUTTON_VARIANTS.icon, color: 'orange' },
];
const variantsWithIcons: (BasicButtonVariant & IconProps)[] = [
  {
    variant: BUTTON_VARIANTS.primary,
    color: 'orange',
    icon: 'alert',
    iconColor: 'blueDark',
    iconSize: 20,
  },
  {
    variant: BUTTON_VARIANTS.ghost,
    color: 'orange',
    icon: 'alert',
    iconColor: 'blueDark',
    iconSize: 20,
  },
  {
    variant: BUTTON_VARIANTS.text,
    color: 'orange',
    icon: 'alert',
    iconColor: 'blueDark',
    iconSize: 20,
  },
  {
    variant: BUTTON_VARIANTS.notificationItem,
    color: 'orange',
    icon: 'alert',
    iconColor: 'blueDark',
    iconSize: 20,
  },
  {
    variant: BUTTON_VARIANTS.icon,
    color: 'orange',
    icon: 'alert',
    iconColor: 'blueDark',
    iconSize: 20,
  },
];

const mockStyling = {
  bckgColor: initialTheme.palette.light,
  borderColor: initialTheme.palette.blueLight,
  color: initialTheme.palette.blueLight,
};

describe('Button', () => {
  afterEach(cleanup);
  const button = ({
    variant = BUTTON_VARIANTS.primary,
    color,
    icon,
    iconColor,
    iconSize,
    children,
  }: PropsWithChildren<ButtonProps>) =>
    renderWithProviders(
      <Button variant={variant} color={color} icon={icon} iconColor={iconColor} iconSize={iconSize}>
        {children}
      </Button>,
      {},
    );

  const buttonWrapper = ({
    wrapper,
    width,
    height,
    marginTop,
    children,
  }: PropsWithChildren<ButtonProps>) =>
    renderWithProviders(
      <Button wrapper={wrapper} width={width} height={height} marginTop={marginTop}>
        {children}
      </Button>,
      {},
    );

  describe('Basic button types', () => {
    test.each(variantsColorsVariations)(
      '$variant Button renders correctly - $color',
      ({ variant, color }) => {
        expect(button({ variant, color, children: variant })).toMatchSnapshot();
      },
    );

    test.each(variantsWithIcons)(
      '$variant Button renders correctly - with icon',
      ({ variant, color, icon, iconColor, iconSize }) => {
        expect(
          button({ variant, color, icon, children: variant, iconColor, iconSize }),
        ).toMatchSnapshot();
      },
    );

    it('Button wrapper renders correctly', () => {
      expect(
        buttonWrapper({ wrapper: true, width: 10, height: 10, marginTop: 1, children: 'Text' }),
      ).toMatchSnapshot();
    });
  });
  describe('Specific button types', () => {
    it('Icon Button renders correctly', () => {
      expect(
        button({
          variant: BUTTON_VARIANTS.icon,
          icon: 'alert',
          iconColor: 'blueDark',
          iconSize: 24,
        }),
      ).toMatchSnapshot();
    });
    it('NotificationItem Button renders correctly', () => {
      expect(button({ variant: BUTTON_VARIANTS.notificationItem })).toMatchSnapshot();
    });
  });
  describe('Utils functions', () => {
    describe('getStyledButton', () => {
      test.each(variantsColorsVariations)(
        'Returns correct button style and styling for $color $variant button',
        ({ variant, color }) => {
          expect(getStyledButton(variant, color)).toEqual(BUTTONS_STYLES[variant](color));
        },
      );
    });

    describe('getIconColor', () => {
      it('Returns correct color key for matching color value from the palette', () => {
        const colorName = 'orangeDark';
        const iconColor = getIconColor(initialTheme.palette[colorName]);
        expect(iconColor).toEqual(colorName);
      });
    });

    describe('getWrapper', () => {
      it('Returns wrapper', () => {
        const data = { width: 20, height: 20, marginTop: 1 };
        const wrapper = getWrapper(data);
        expect(wrapper).toEqual({
          ButtonWrapper: Styled.ButtonWrapper,
          styling: data,
        });
      });
    });

    describe('addHover', () => {
      it('Returns styling object when hover is "default"', () => {
        const result = addHover({
          hover: 'default',
          hoverColor: 'blueLight',
          styling: mockStyling,
        });
        expect(result).toEqual(mockStyling);
      });

      it('Returns styling object when hover is not "default"', () => {
        const result = addHover({ hover: 'text', hoverColor: 'blueLight', styling: mockStyling });
        expect(result).toEqual({
          ...mockStyling,
          hoverColor: initialTheme.palette.blueLight,
        });
      });
    });
  });
});
