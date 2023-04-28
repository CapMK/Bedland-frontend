import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import SetNewPassword from './SetNewPassword';

// docs: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Organisms/SetNewPassword',
  component: SetNewPassword,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SetNewPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
