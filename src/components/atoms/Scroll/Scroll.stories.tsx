import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Scroll from './Scroll';

const meta = {
  title: 'Atoms/Scroll',
  component: Scroll,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Scroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          border: '1px solid black',
          height: '12.5rem',
          width: '18.75rem',
          color: 'white',
        }}
      >
        Test
      </div>
    ),
    contentSize: 5,
  },
};
