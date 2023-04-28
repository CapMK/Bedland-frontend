import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Badge from './Badge';
import { BADGE_VARIANTS } from './Badge.utils';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: BADGE_VARIANTS,
      control: { type: 'radio' },
      description: 'Badge variant',
      defaultValue: { summary: 'primary' },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Test',
  },
};
