import type { Meta, StoryObj } from '@storybook/react';
import routes from 'App/routing/routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import DropdownItem from './DropdownItem';

const meta = {
  title: 'Molecules/DropdownItem',
  component: DropdownItem,
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
  argTypes: {
    linkRoute: { table: { disable: true } },
  },
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    linkRoute: routes.account,
    iconName: 'user',
    label: 'My Account',
    color: 'inputGrey',
  },
};
