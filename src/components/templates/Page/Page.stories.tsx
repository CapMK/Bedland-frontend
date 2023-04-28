import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import Page from './Page';

const meta = {
  title: 'Templates/Page',
  component: Page,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={reduxStore}>
            <GlobalStyle />
            <Header />
            {Story()}
            <Footer />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            border: '1px solid white',
            height: '300px',
            width: '300px',
            color: 'white',
            backgroundColor: 'darkgrey',
          }}
        >
          left content section
        </div>
        <div
          style={{
            border: '1px solid white',
            height: '300px',
            width: '300px',
            color: 'white',
            backgroundColor: 'darkgrey',
          }}
        >
          right content section
        </div>
      </>
    ),
    title: 'Default Title',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
