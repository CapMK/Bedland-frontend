import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';

import AccountInfo from './AccountInfo';

const meta = {
  title: 'Atoms/AccountInfo',
  component: AccountInfo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <GlobalStyle />
          {Story()}
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof AccountInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    userRole: 'manager',
    userLogin: 'John Doe',
  },
};
