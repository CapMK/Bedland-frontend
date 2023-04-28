import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import RulesDescription from './RulesDescription';

// docs: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Molecules/RulesDescription',
  component: RulesDescription,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof RulesDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
