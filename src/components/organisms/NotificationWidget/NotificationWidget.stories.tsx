import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import NotificationWidget from './NotificationWidget';

const meta = {
  title: 'Organisms/NotificationWidget',
  component: NotificationWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof NotificationWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNotificationWidget: Story = {};
