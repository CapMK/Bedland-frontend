import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import ContactsWidget from './ContactsWidget';

const meta = {
  title: 'Organisms/ContactsWidget',
  component: ContactsWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          {Story()}
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ContactsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContactsWidget: Story = {};
