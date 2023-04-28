import styled from 'styled-components';

export const ChartWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const ChartContainer = styled.div<{ size: number }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${({ size }) => size}rem;
  justify-content: start;
  padding: 0 0 0rem 2.3rem;
  width: 100%;
`;

export const DoughnutChartWrapper = styled.div<{ size: number }>`
  height: ${({ size }) => size}rem;
  position: relative;
  width: 100%;
`;

export const DoughnutChartContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const ChartTitle = styled.span`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  justify-content: start;
  letter-spacing: 0.01rem;
  line-height: 140%;
  padding: 1rem 0 1.61rem 1.5rem;
  width: 100%;
`;
