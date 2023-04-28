import styled from 'styled-components';
import initialTheme from 'theme/initialTheme';
import { StylingProps, StyledWrapperProps } from './Button.types';

const buttonTypography = {
  ...initialTheme.typography.header4,
};

export const ButtonWrapper = styled.div<StyledWrapperProps>`
  ${({ styling: { height } }) => (height ? `height: ${height}rem` : null)};
  ${({ styling: { marginTop } }) => (marginTop ? `margin-top: ${marginTop}rem` : null)};
  ${({ styling: { width } }) => (width ? `width: ${width}rem` : null)};
`;

export const PrimaryButton = styled.button<StylingProps>`
  align-items: center;
  background-color: ${({ styling: { bckgColor } }) => bckgColor};
  border: 1px solid ${({ styling: { borderColor } }) => borderColor};
  border-radius: 0.5rem;
  color: ${({ styling: { color } }) => color};
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0.5625rem 1rem;
  white-space: nowrap;
  width: 100%;
  ${buttonTypography}
  &:hover {
    background-color: ${({ styling: { hoverBckgColor } }) => hoverBckgColor};
    border: 1px solid ${({ styling: { hoverBorderColor } }) => hoverBorderColor};
    color: ${({ styling: { hoverColor } }) => hoverColor};
  }
`;

export const TextButton = styled(PrimaryButton)<StylingProps>`
  &:hover {
    background-color: ${({ styling: { hoverBckgColor } }) => hoverBckgColor};
    border: 1.75px solid ${({ styling: { hoverBorderColor } }) => hoverBorderColor};
  }

  &:focus {
    background-color: ${({ styling: { pressedBckgColor } }) => pressedBckgColor};
    border: 1.75px solid ${({ styling: { pressedBorderColor } }) => pressedBorderColor};
  }

  background-color: ${({ styling: { bckgColor } }) => bckgColor};
  border: 1.75px solid ${({ styling: { borderColor } }) => borderColor};
  color: ${({ styling: { color } }) => color};
  padding: ${({ styling: { paddingTB } }) => `${paddingTB}rem` || '0.5625rem'} 1rem;
`;

export const GhostButton = styled(PrimaryButton)<StylingProps>`
  &:hover {
    background-color: ${({ styling: { hoverBckgColor } }) => hoverBckgColor};
    border: 1.75px solid ${({ styling: { hoverBorderColor } }) => hoverBorderColor};
  }
  background-color: ${({ styling: { bckgColor } }) => bckgColor};
  border: 1.75px solid ${({ styling: { borderColor } }) => borderColor};
  color: ${({ styling: { color } }) => color};
  padding: ${({ styling: { paddingTB } }) => `${paddingTB}rem` || '0.5625rem'} 1rem;
`;

export const IconButton = styled.button<StylingProps>`
  align-items: center;
  background-color: transparent;
  color: ${({ styling: { color } }) => color};
  display: flex;
  justify-content: center;
`;
