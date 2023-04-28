import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import MainBodyFull from './MainBodyFull';

const meta = {
  title: 'Templates/MainBodyFull',
  component: MainBodyFull,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          {' '}
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
} satisfies Meta<typeof MainBodyFull>;

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
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
