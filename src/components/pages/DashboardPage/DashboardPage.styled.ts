import styled from 'styled-components';

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const DashboardRow = styled.div<{ firstColumn: number; secondColumn: number }>`
  display: grid;
  gap: 1.97%;
  grid-template-columns: ${({ firstColumn, secondColumn }) => `${firstColumn}% ${secondColumn}%`};
  margin-bottom: 1.25rem;
`;
