import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import PasswordResetPage from './ResetPasswordPage';

const meta = {
  title: 'Pages/PasswordResetPage',
  component: PasswordResetPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PasswordResetPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
