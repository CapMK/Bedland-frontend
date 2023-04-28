import type { Meta, StoryObj } from '@storybook/react';
import { colorNames, typographyNames } from 'theme/theme.types';
import ThemeProvider from 'theme/ThemeContext';
import Typography from './Typography';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: typographyNames,
      control: 'radio',
      description: 'Typography variant',
      defaultValue: { summary: 'paragraph' },
      table: {
        type: {
          summary: `Variants: ${typographyNames.toString().replaceAll(',', ' | ')}`,
        },
        defaultValue: { summary: 'paragraph' },
      },
    },
    children: {
      name: 'label',
      description: 'Text to display',
    },
    style: {
      table: {
        disable: true,
      },
    },
    color: {
      options: colorNames,
      control: 'select',
      description: 'Color of the text',
      defaultValue: 'default',
    },
  },
  decorators: [(Story) => <ThemeProvider>{Story()}</ThemeProvider>],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header2: Story = {
  args: {
    variant: 'header2',
    color: 'text',
    children: 'header2',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    color: 'text',
    children:
      'There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, - Oh dear! Oh dear! I shall be late!- (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge. ',
  },
};

export const Captions: Story = {
  args: {
    variant: 'captions',
    color: 'text',
    children: 'Caption',
  },
};

export const SidebarItem: Story = {
  args: {
    variant: 'header4',
    color: 'text',
    children: 'header 4',
  },
};
