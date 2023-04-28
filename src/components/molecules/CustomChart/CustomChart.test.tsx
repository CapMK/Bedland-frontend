import { renderWithProviders } from 'utils/test.utils';
import { HexColor } from 'theme/theme.types';
import { mockDataForPaymentChart, mockDataForVotingChart } from 'utils/mock/chartsMockData';
import { vi } from 'vitest';
import CustomChart from './CustomChart';
import { CustomChartProps, PaymentChartInputDataType } from './CustomChart.types';
import { chartDataAdapter, getSortedValuesOutOfInputData } from './CustomChart.utils';

vi.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
  Bar: () => null,
}));

const mockPaymentDataSorted: PaymentChartInputDataType = {
  'Payment overdue': mockDataForPaymentChart['Payment overdue'],
  'Awaiting payments': mockDataForPaymentChart['Awaiting payments'],
  'Paid on time': mockDataForPaymentChart['Paid on time'],
};

const mockCustomChartLabels = ['1Label', '2Label', '3Label'];
const mockCustomChartBackgroundColor: HexColor[] = ['#000000', '#ffffff', '#f06d06'];
const mockCustomChartData: number[] = [24, 36, 40];
const mockReturnCustomChartDataAdapter = {
  labels: mockCustomChartLabels,
  datasets: [
    {
      label: ' ',
      data: mockCustomChartData,
      backgroundColor: mockCustomChartBackgroundColor,
    },
  ],
};

const mockCustomChartPaymentInput: CustomChartProps = {
  data: mockDataForPaymentChart,
  variant: 'paymentManager',
  title: 'Some random title',
  size: 200,
};

const mockCustomChartVotingInput: CustomChartProps = {
  data: mockDataForVotingChart,
  variant: 'paymentManager',
  title: 'Some random title',
  size: 200,
};

describe('Custom Chart', () => {
  const chart = ({ data, variant, title, size }: CustomChartProps) =>
    renderWithProviders(
      <CustomChart data={data} variant={variant} title={title} size={size} />,
      {},
    );

  it('should renders correctly doughnut payment chart for manager', () => {
    expect(chart(mockCustomChartPaymentInput)).toMatchSnapshot();
  });

  it('should renders correctly bar chart for voting', () => {
    expect(chart(mockCustomChartVotingInput)).toMatchSnapshot();
  });

  it('chartDataAdapter function', () => {
    expect(
      chartDataAdapter(mockCustomChartLabels, mockCustomChartBackgroundColor, mockCustomChartData),
    ).toEqual(mockReturnCustomChartDataAdapter);
  });

  it('inputDataForChartConverter payment variant, should return sorted data ', () => {
    expect(getSortedValuesOutOfInputData(mockDataForPaymentChart)).toEqual(
      Object.values(mockPaymentDataSorted),
    );
  });
});
