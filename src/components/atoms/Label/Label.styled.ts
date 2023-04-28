import styled from 'styled-components';

const sizes: { [key: string]: number } = { small: 10, medium: 16, large: 24 };

export const Lbl = styled.label<{
  textColor: string;
  size: 'small' | 'medium' | 'large';
}>`
  color: ${(props) => props.textColor};
  display: flex;
  font-size: ${(props) => sizes[props.size]};
`;

export default Lbl;
