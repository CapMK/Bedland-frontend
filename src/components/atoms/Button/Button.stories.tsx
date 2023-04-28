import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import { colorNames } from 'theme/theme.types';
import ThemeProvider from 'theme/ThemeContext';
import { iconsNames } from '../Icon/icon.types';
import Button from './Button';
import {
  ButtonVariants,
  buttonColors,
  BUTTON_VARIANTS,
  ButtonProps,
  hoverVariants,
} from './Button.types';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Super custom button',
    color: 'orange',
  },
  argTypes: {
    wrapper: {
      description: 'Is button a buttonWrapper',
      defaultValue: false,
      type: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    marginTop: {
      description: 'Additional wrapper prop - marginTop',
      defaultValue: 0,
      type: 'number',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    width: {
      description: 'Additional wrapper prop - width',
      defaultValue: 0,
      type: 'number',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    height: {
      description: 'Additional wrapper prop - height',
      defaultValue: 0,
      type: 'number',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    variant: {
      description: 'Variant of the button',
      options: ButtonVariants,
      defaultValue: BUTTON_VARIANTS.primary,
      control: 'select',
      table: {
        defaultValue: { summary: BUTTON_VARIANTS.primary },
      },
    },
    color: {
      description: 'Color variant of the button',
      options: buttonColors,
      defaultValue: BUTTON_VARIANTS.primary,
      control: 'select',
      table: {
        defaultValue: { summary: BUTTON_VARIANTS.primary },
      },
    },
    hover: {
      description: 'Hover variant',
      options: hoverVariants,
      defaultValue: 'default',
      control: 'select',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    hoverColor: {
      description: 'Hover color variant',
      options: colorNames,
      defaultValue: 'blueLight',
      control: 'select',
      table: {
        defaultValue: { summary: 'blueLight' },
      },
    },
    icon: {
      description: 'icon variant',
      options: iconsNames,
      defaultValue: null,
      control: 'select',
      table: {
        defaultValue: { summary: null },
      },
    },
    iconColor: {
      description: 'icon color in hex format',
      options: colorNames,
      defaultValue: 'secondaryDark',
      control: 'select',
      table: {
        defaultValue: { summary: 'secondaryDark' },
      },
    },
    iconSize: {
      description: 'icon size',
      defaultValue: 20,
      type: 'number',
      table: {
        defaultValue: { summary: 20 },
      },
    },
  },
  decorators: [
    (Story: () => JSX.Element) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary', color: 'orange' },
};
export const PrimaryBorders: Story = {
  args: { variant: 'primaryBorders', children: 'PrimaryBorders', color: 'white' },
};
export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost', color: 'orange' },
};
export const NotificationItem: Story = {
  args: { variant: 'notificationItem', color: 'orange', children: 'Details' },
};
export const Text: Story = {
  args: { variant: 'text', children: 'Text', color: 'orange' },
};
export const Icon: Story = {
  args: { variant: 'icon', color: 'orange', icon: 'alert', children: '' },
};
