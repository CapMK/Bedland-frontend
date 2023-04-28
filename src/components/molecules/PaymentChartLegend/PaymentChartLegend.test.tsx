import { render } from 'utils/test.utils';
import { mockChartLegendData } from 'utils/mock/chartsMockData';
import PaymentChartLegend, { PaymentChartLegendProps } from './PaymentChartLegend';

describe('Payment Chart Legend ', () => {
  const item = (
    labels: PaymentChartLegendProps['labels'],
    backgroundColor: PaymentChartLegendProps['backgroundColor'],
    data: PaymentChartLegendProps['data'],
  ) =>
    render(
      <PaymentChartLegend labels={labels} backgroundColor={backgroundColor} data={data} />,
      {},
    );

  it('should render correctly', () => {
    expect(
      item(
        mockChartLegendData.labels,
        mockChartLegendData.backgroundColor,
        mockChartLegendData.data,
      ),
    ).toMatchSnapshot();
  });
});
