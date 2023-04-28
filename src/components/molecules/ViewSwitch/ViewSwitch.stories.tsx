import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import ViewSwitch from './ViewSwitch';

const meta = {
  title: 'Molecules/ViewSwitch',
  component: ViewSwitch,
  tags: ['autodocs'],

  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ViewSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
