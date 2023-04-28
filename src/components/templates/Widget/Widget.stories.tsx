import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Widget from './Widget';
import { widgetMode } from './Widget.types';

const meta = {
  title: 'Templates/Widget',
  component: Widget,
  tags: ['autodocs'],
  args: {
    variant: 'notifications',
    title: 'Widget title',
    mode: 'dark',
    isArrowButton: true,
    onClick: () => null,
  },
  argTypes: {
    variant: {
      description: 'Widget variant',
    },
    title: {
      description: 'Widget title',
    },
    mode: {
      description: 'Widget mode',
      control: {
        type: 'radio',
        options: widgetMode,
      },
    },
    isArrowButton: {
      description: 'Show arrow button',
    },
    onClick: {
      description: 'Click handler for button in the header',
    },
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
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WidgetNotification: Story = {};

export const WidgetPayments: Story = {
  args: {
    variant: 'payments',
  },
};

export const WidgetContacts: Story = {
  args: {
    variant: 'contacts',
  },
};

export const WidgetVotings: Story = {
  args: {
    variant: 'votings',
  },
};

export const WidgetLightMode: Story = {
  args: {
    mode: 'light',
  },
};

export const WidgetDarkMode: Story = {};

export const WidgetWithButton: Story = {};

export const WidgetWithoutButton: Story = {
  args: {
    isArrowButton: false,
  },
};
