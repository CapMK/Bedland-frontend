import { Chart, ChartTypeRegistry } from 'chart.js';
import initialTheme from 'theme/initialTheme';
import { HexColor } from 'theme/theme.types';
import {
  ChartsColorsTypes,
  ChartsInformations,
  ChartsOptions,
  ChartsPlugins,
  ChartVariantsType,
  PaymentChartInputDataType,
  PaymentChartLabels,
} from './CustomChart.types';

export const ChartsColorsValue: ChartsColorsTypes = {
  votingChart: {
    chartVoting_1stColumn: initialTheme.palette.greenLight,
    chartVotingNo_2ndColumn: initialTheme.palette.redLight,
    chartVoting_3rdColumn: initialTheme.palette.blueLight,
  },
  paymentChart: {
    chartPaymentPaid: initialTheme.palette.greenDark,
    chartPaymentOverdue: initialTheme.palette.redLight,
    chartPaymentAwaiting: initialTheme.palette.yellow,
  },
} as const;

export const CHARTS_OPTIONS: ChartsOptions = {
  paymentChart: () => ({
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  }),
  votingChart: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
    },
    indexAxis: 'x',
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          offset: true,
        },
      },
    },
  },
};

export const CHART_PLUGINS: ChartsPlugins = {
  textOnCenterPlugin: (centerText: string, sizeOfTheFont = 0.75) => ({
    id: 'textOnCenter',
    beforeDatasetDraw(chart: Chart<keyof ChartTypeRegistry>) {
      const { ctx } = chart;
      const fontSize = sizeOfTheFont;
      const text = centerText.split(' ');
      const textX = chart.getDatasetMeta(0).data[0].x;
      const textY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `${fontSize}rem sans-serif`;
      ctx.fillStyle = 'black';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(text[0], textX, textY - sizeOfTheFont * 16);
      ctx.fillText(text[1], textX, textY + 8);
      ctx.restore();
      ctx.save();
    },
  }),
};

export const CHARTS_INFORMATIONS: ChartsInformations = {
  paymentChart: {
    paymentManager: {
      labels: [PaymentChartLabels[0], PaymentChartLabels[1], PaymentChartLabels[2]],
      colors: [
        ChartsColorsValue.paymentChart.chartPaymentOverdue,
        ChartsColorsValue.paymentChart.chartPaymentAwaiting,
        ChartsColorsValue.paymentChart.chartPaymentPaid,
      ],
    },
    paymentResident: {
      labels: [PaymentChartLabels[1], PaymentChartLabels[2]],
      colors: [
        ChartsColorsValue.paymentChart.chartPaymentAwaiting,
        ChartsColorsValue.paymentChart.chartPaymentPaid,
      ],
    },
  },

  votingChart: {
    colors: [
      ChartsColorsValue.votingChart.chartVoting_1stColumn,
      ChartsColorsValue.votingChart.chartVotingNo_2ndColumn,
      ChartsColorsValue.votingChart.chartVoting_3rdColumn,
    ],
  },
};

export const CHART_VARIANTS: ChartVariantsType = {
  paymentManager: 'paymentManager',
  paymentResident: 'paymentResident',
  voting: 'voting',
} as const;

export const chartDataAdapter = (
  labels: string[],
  backgroundColor: HexColor[],
  data: number[],
) => ({
  labels,
  datasets: [
    {
      label: ' ',
      data,
      backgroundColor,
    },
  ],
});

export const getSortedValuesOutOfInputData = (data: PaymentChartInputDataType): number[] => {
  const tempArray = PaymentChartLabels.map((paymentLabels) => data[paymentLabels]).filter(
    (item) => item !== undefined,
  );
  return tempArray;
};
