import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import LoginForm from './LoginForm';

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <BrowserRouter>{Story()}</BrowserRouter>
        </Provider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
