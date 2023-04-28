import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';

import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import LoginPage from './LoginPage';

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <Provider store={reduxStore}>
          <BrowserRouter>{Story()}</BrowserRouter>
        </Provider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
