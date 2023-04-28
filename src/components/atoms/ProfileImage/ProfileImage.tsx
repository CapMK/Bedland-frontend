import * as Styled from './ProfileImage.styled';

type ProfileImageProps = {
  src: string;
  size: number;
};

const ProfileImage = ({ src, size }: ProfileImageProps) => (
  <Styled.Profile src={src} alt='profile' size={size} />
);

export default ProfileImage;
