import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { FC, PropsWithChildren } from 'react';
import {
  chartDataAdapter,
  CHARTS_INFORMATIONS,
  CHARTS_OPTIONS,
  CHART_PLUGINS,
  CHART_VARIANTS,
  getSortedValuesOutOfInputData,
} from './CustomChart.utils';
import * as Styled from './CustomChart.styled';
import PaymentChartLegend from '../PaymentChartLegend/PaymentChartLegend';
import { CustomChartProps, IsVotingChart } from './CustomChart.types';

Chart.register(ArcElement, Tooltip, Legend);

const CustomChart: FC<PropsWithChildren<CustomChartProps>> = ({
  data,
  size = 12.5,
  variant,
  title,
  centerText = '',
}) => {
  const { labels, colors } =
    CHARTS_INFORMATIONS.paymentChart[
      variant !== CHART_VARIANTS.voting ? variant : CHART_VARIANTS.paymentManager
    ];
  const doughnutChartRadius = (size * 16) / 2;

  return (
    <Styled.ChartWrapper>
      {variant !== CHART_VARIANTS.voting && !IsVotingChart(data) ? (
        <>
          <Styled.ChartTitle>{title}</Styled.ChartTitle>
          <Styled.ChartContainer size={size}>
            <Styled.DoughnutChartWrapper size={size}>
              <Styled.DoughnutChartContainer>
                <Doughnut
                  redraw
                  updateMode='resize'
                  options={CHARTS_OPTIONS.paymentChart(doughnutChartRadius)}
                  plugins={[CHART_PLUGINS.textOnCenterPlugin(centerText)]}
                  data={chartDataAdapter(labels, colors, getSortedValuesOutOfInputData(data))}
                />
              </Styled.DoughnutChartContainer>
            </Styled.DoughnutChartWrapper>
            <PaymentChartLegend data={data} labels={labels} backgroundColor={colors} />
          </Styled.ChartContainer>
        </>
      ) : (
        <Bar
          redraw
          updateMode='resize'
          options={CHARTS_OPTIONS.votingChart}
          data={chartDataAdapter(
            Object.keys(data),
            CHARTS_INFORMATIONS.votingChart.colors,
            Object.values(data),
          )}
        />
      )}
    </Styled.ChartWrapper>
  );
};

export default CustomChart;
