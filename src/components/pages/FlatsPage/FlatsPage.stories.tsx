import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';

import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import FlatsPage from './FlatsPage';

const meta = {
  title: 'Pages/FlatsPage',
  component: FlatsPage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
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
} satisfies Meta<typeof FlatsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
