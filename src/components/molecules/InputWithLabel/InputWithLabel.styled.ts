import styled from 'styled-components';
import { LOGIN_INPUT_WIDTH } from 'utils/constans';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;
  width: ${LOGIN_INPUT_WIDTH}rem;
`;

export default InputContainer;
