import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import PaymentWidget from './PaymentWidget';

const meta = {
  title: 'Organisms/PaymentWidget',
  component: PaymentWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof PaymentWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentWidgetManager: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager"}}',
  },
};

export const PaymentWidgetResident: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident"}}',
  },
};
