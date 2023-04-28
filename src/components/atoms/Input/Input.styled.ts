import styled from 'styled-components';
import { LOGIN_INPUT_WIDTH } from 'utils/constans';

export const LoginInput = styled.input<{ borderColor: string }>`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.5rem;
  display: flex;
  height: 2.875rem;
  padding: 0.625rem 1rem 0.625rem 1rem;
  width: ${LOGIN_INPUT_WIDTH}rem;
  &:disabled,
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export default LoginInput;
