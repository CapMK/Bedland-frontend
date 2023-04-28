import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import SearchBar from './SearchBar';

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: { placeholder: 'Search flats...' },
  argTypes: {
    placeholder: {
      description: 'Placeholder value',
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
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
