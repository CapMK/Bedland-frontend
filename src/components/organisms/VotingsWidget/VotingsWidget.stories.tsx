import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import VotingsWidget from './VotingsWidget';

const meta = {
  title: 'Organisms/VotingsWidget',
  component: VotingsWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof VotingsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultVotingWidget: Story = {};
