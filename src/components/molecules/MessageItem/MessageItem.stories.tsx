import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Avatar from 'assets/img/Avatar.svg';
import MessageItem from './MessageItem';

const meta = {
  title: 'Molecules/MessageItem',
  component: MessageItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: { name: 'Jessie Burton', image: Avatar },
  argTypes: {
    name: {
      description: 'Name to display',
    },
    image: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MessageItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
