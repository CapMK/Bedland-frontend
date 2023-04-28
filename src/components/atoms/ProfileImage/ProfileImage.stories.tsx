import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Avatar from 'assets/img/Avatar.svg';
import ProfileImage from './ProfileImage';

const meta = {
  title: 'Atoms/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      table: {
        disable: true,
      },
    },
    size: {
      description: 'Size of the image in rem',
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
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: Avatar,
    size: 1.5,
  },
};
