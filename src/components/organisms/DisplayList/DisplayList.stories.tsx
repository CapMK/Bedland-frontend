import type { Meta, StoryObj } from '@storybook/react';
import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import mockResidentFlats from 'utils/mock/mockResidentsFlats';
import mockBuildingsList from 'utils/mock/mockBuildingsList';
import DisplayList from './DisplayList';

const meta = {
  title: 'Organisms/DisplayList',
  component: DisplayList,
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    displayList: {
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
} satisfies Meta<typeof DisplayList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlatsList: Story = {
  args: { displayList: mockResidentFlats },
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident", "loggedIn": "true"}}',
  },
};

export const BuildingsList: Story = {
  args: { displayList: mockBuildingsList },
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager", "loggedIn": "true"}}',
  },
};
