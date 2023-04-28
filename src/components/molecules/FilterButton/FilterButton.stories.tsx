import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import FilterButton from './FilterButton';

const meta = {
  title: 'Molecules/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof FilterButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
