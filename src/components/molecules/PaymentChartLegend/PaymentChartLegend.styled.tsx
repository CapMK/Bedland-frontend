import styled from 'styled-components';
import { HexColor } from 'theme/theme.types';
import { ChartsColorsValue } from '../CustomChart/CustomChart.utils';

export const LegendBox = styled.div.attrs({
  id: 'legendBox',
})`
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 0.6rem;
  padding: 0 0 0 5.98rem;
  width: 100%;
`;

export const LegendItem = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;

export const LegendTitle = styled(LegendItem)<{ labelBckColor: HexColor }>`
  color: ${({ labelBckColor }) =>
    labelBckColor === ChartsColorsValue.paymentChart.chartPaymentAwaiting
      ? 'black'
      : labelBckColor};
  justify-content: start;
`;

export const PercentageBox = styled.div<{ labelBckColor: HexColor }>`
  background-color: ${({ labelBckColor }) => labelBckColor};
  border-radius: 2.7px;
  color: ${({ labelBckColor }) =>
    labelBckColor === ChartsColorsValue.paymentChart.chartPaymentAwaiting ? 'black' : 'white'};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
`;
