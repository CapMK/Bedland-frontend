import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import VotingsItem from './VotingsItem';

const meta = {
  title: 'Molecules/VotingsItem',
  component: VotingsItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  argTypes: {
    deadlineDate: {
      control: 'date',
      description: 'Select date as deadline date to calculate left/ago days from current date',
    },
  },
} satisfies Meta<typeof VotingsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    deadlineDate: new Date(2023, 2, 16),
  },
};
