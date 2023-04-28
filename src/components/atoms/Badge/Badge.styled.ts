import styled from 'styled-components';
import { StyledBadgePropses } from './Badge.types';

export const PrimaryBadge = styled.div<StyledBadgePropses>`
  align-items: center;
  background-color: ${({ colors: { bgColor } }) => bgColor};
  border: 1px solid ${({ colors: { borderColor } }) => borderColor};
  border-radius: 8px;
  color: ${({ colors: { color } }) => color};
  display: flex;
  height: 1.5rem;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
`;

export const SecondaryBadge = styled(PrimaryBadge)<StyledBadgePropses>`
  background-color: ${({ colors: { bgColor } }) => bgColor};
  border: 1px solid ${({ colors: { borderColor } }) => borderColor};
  color: ${({ colors: { color } }) => color};
`;

export const WarningBadge = styled(PrimaryBadge)<StyledBadgePropses>`
  background-color: ${({ colors: { bgColor } }) => bgColor};
  border: 1px solid ${({ colors: { borderColor } }) => borderColor};
  color: ${({ colors: { color } }) => color};
`;

export const DangerBadge = styled(PrimaryBadge)<StyledBadgePropses>`
  background-color: 1px solid ${({ colors: { bgColor } }) => bgColor};
  border: 1px solid ${({ colors: { borderColor } }) => borderColor};
  color: ${({ colors: { color } }) => color};
`;
