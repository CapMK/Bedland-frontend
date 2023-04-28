import { ChartOptions, Plugin } from 'chart.js';
import { HexColor } from 'theme/theme.types';

const ChartsColorsNames = {
  votingChart: ['chartVoting_1stColumn', 'chartVotingNo_2ndColumn', 'chartVoting_3rdColumn'],
  paymentChart: ['chartPaymentPaid', 'chartPaymentOverdue', 'chartPaymentAwaiting'],
} as const;

export type VotingChartColorType = {
  [key in (typeof ChartsColorsNames.votingChart)[number]]: HexColor;
};

export type PaymentChartColorType = {
  [key in (typeof ChartsColorsNames.paymentChart)[number]]: HexColor;
};

export type ChartsColorsTypes = {
  votingChart: VotingChartColorType;
  paymentChart: PaymentChartColorType;
};

export const PaymentChartLabels = ['Payment overdue', 'Awaiting payments', 'Paid on time'] as const;

export type ChartsInformations = {
  paymentChart: {
    paymentManager: {
      labels: (typeof PaymentChartLabels)[number][];
      colors: HexColor[];
    };
    paymentResident: {
      labels: (typeof PaymentChartLabels)[number][];
      colors: HexColor[];
    };
  };
  votingChart: { colors: HexColor[] };
};

export type VotingChartInputDataType = {
  [key: string]: number;
};

export type PaymentChartInputDataType = {
  [key in (typeof PaymentChartLabels)[number]]: number;
};

export type InputDataFormat = VotingChartInputDataType | PaymentChartInputDataType;

export const IsVotingChart = (
  data: VotingChartInputDataType | PaymentChartInputDataType,
): data is VotingChartInputDataType => (data as VotingChartInputDataType).YES !== undefined;

export type ChartsOptions = {
  paymentChart: (radius: number) => ChartOptions<'doughnut'>;
  votingChart: ChartOptions<'bar'>;
};
export type ChartsPlugins = {
  textOnCenterPlugin: (text: string, fontSize?: number) => Plugin<'doughnut'>;
};
export type ChartVariants = ['paymentManager', 'paymentResident', 'voting'];

export type ChartVariantsType = {
  [key in ChartVariants[number]]: `${key}`;
};

export type CustomChartProps = {
  data: InputDataFormat;
  size?: number;
  variant: ChartVariants[number];
  title?: string;
  centerText?: string;
};
