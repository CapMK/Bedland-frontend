// this default image should be changed when the graphic is done
import DefaultImage from 'assets/img/Loginlogo.svg';
import * as Styled from './Image.styled';

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src = DefaultImage, alt = '' }: ImageProps) => <Styled.Img src={src} alt={alt} />;

export default Image;
