import { PropsWithChildren, FC } from 'react';
import { HexColor } from 'theme/theme.types';
import * as Styled from './PaymentChartLegend.styled';
import { PaymentChartInputDataType, PaymentChartLabels } from '../CustomChart/CustomChart.types';

type LabelsType = (typeof PaymentChartLabels)[number];
export type PaymentChartLegendProps = {
  labels: LabelsType[];
  data: PaymentChartInputDataType;
  backgroundColor: HexColor[];
};

const PaymentChartLegend: FC<PropsWithChildren<PaymentChartLegendProps>> = ({
  labels,
  data,
  backgroundColor,
}) => (
  <Styled.LegendBox>
    {labels.map((label: LabelsType, index: number) => (
      <Styled.LegendItem key={label}>
        <Styled.LegendTitle labelBckColor={backgroundColor[index]}>{label}</Styled.LegendTitle>
        <Styled.PercentageBox labelBckColor={backgroundColor[index]}>
          {`${data[label]}%`}
        </Styled.PercentageBox>
      </Styled.LegendItem>
    ))}
  </Styled.LegendBox>
);

export default PaymentChartLegend;
