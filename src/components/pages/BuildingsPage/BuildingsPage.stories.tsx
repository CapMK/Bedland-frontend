import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import BuildingsPage from './BuildingsPage';

const meta = {
  title: 'Pages/BuildingsPage',
  component: BuildingsPage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
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
} satisfies Meta<typeof BuildingsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
