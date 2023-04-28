import styled from 'styled-components';

export const DisplayContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export default DisplayContainer;
