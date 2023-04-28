import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import PaymentChartLegend from './PaymentChartLegend';
import { CHARTS_INFORMATIONS } from '../CustomChart/CustomChart.utils';
import { mockDataForPaymentChart } from '../../../utils/mock/chartsMockData';

const meta = {
  title: 'Molecules/PaymentChartLegend',
  component: PaymentChartLegend,
  tags: ['autodocs'],
  argTypes: {
    labels: {
      description: 'Chart labels',
    },
    backgroundColor: {
      type: { name: 'string', required: true },
      description: 'Chart colors',
      control: { type: 'select' },
    },
    data: { description: 'Chart data' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof PaymentChartLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manager: Story = {
  render: (args) => <PaymentChartLegend {...args} />,

  args: {
    labels: CHARTS_INFORMATIONS.paymentChart.paymentManager.labels,
    backgroundColor: CHARTS_INFORMATIONS.paymentChart.paymentManager.colors,
    data: mockDataForPaymentChart,
  },
  parameters: { background: 'light' },
};
