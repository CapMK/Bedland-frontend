import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import DashboardPage from './DashboardPage';

const meta = {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof DashboardPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardManagerPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager"}}',
  },
};

export const DashboardResidentPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident"}}',
  },
};
