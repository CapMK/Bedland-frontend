import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResidentLoginPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident"}}',
  },
};
export const ManagerLoginPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager"}}',
  },
};

export const ManagerDashboardPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager", "loggedIn": "true"}}',
  },
};
export const ResidentDashboardPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident", "loggedIn": "true"}}',
  },
};
