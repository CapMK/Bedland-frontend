import {
  PaymentChartInputDataType,
  VotingChartInputDataType,
} from '../../components/molecules/CustomChart/CustomChart.types';
import { CHARTS_INFORMATIONS } from '../../components/molecules/CustomChart/CustomChart.utils';

export const mockDataForPaymentChart: PaymentChartInputDataType = {
  'Awaiting payments': 21,
  'Paid on time': 4,
  'Payment overdue': 75,
};

export const mockDataForPaymentChartResident = {
  'Awaiting payments': 25,
  'Paid on time': 75,
};

export const mockDataForVotingChart: VotingChartInputDataType = { YES: 12, NO: 6, ABSTAIN: 20 };

export const mockChartLegendData = {
  labels: CHARTS_INFORMATIONS.paymentChart.paymentManager.labels,
  data: mockDataForPaymentChart,
  backgroundColor: CHARTS_INFORMATIONS.paymentChart.paymentManager.colors,
};
