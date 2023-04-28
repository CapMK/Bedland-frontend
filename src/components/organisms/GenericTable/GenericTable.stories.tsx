/* eslint-disable object-shorthand */
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { buildingDetailsNodes, residentsDetailsNodes, nodes } from 'utils/mock/mockGenericTable';
import GenericTable from './GenericTable';
import { TABLE_NAMES } from './GenericTable.types';

const meta = {
  title: 'Organisms/GenericTable',
  component: GenericTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <div style={{ zoom: 0.9 }}>{Story()}</div>
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    isSelect: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof GenericTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectIsPresent: Story = {
  args: {
    nodes: nodes,
    isSelect: true,
    tableName: TABLE_NAMES.testsTable,
  },
};

export const SelectIsNotPresent: Story = {
  args: {
    nodes: nodes,
    isSelect: false,
    tableName: TABLE_NAMES.testsTable,
  },
};

export const BuildingTable: Story = {
  args: {
    nodes: buildingDetailsNodes,
    isSelect: true,
    tableName: TABLE_NAMES.buildingsTable,
  },
};

export const ResidentsTable: Story = {
  args: {
    nodes: residentsDetailsNodes,
    isSelect: true,
    tableName: TABLE_NAMES.residentsTable,
  },
};
