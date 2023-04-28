import styled from 'styled-components';

export const Profile = styled.img<{ size: number }>`
  border-radius: 50%;
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`;

export default Profile;
