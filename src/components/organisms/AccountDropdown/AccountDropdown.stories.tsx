import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import AccountDropdown from './AccountDropdown';

const meta = {
  title: 'Organisms/AccountDropdown',
  component: AccountDropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={reduxStore}>
            <GlobalStyle />
            {Story()}
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof AccountDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
