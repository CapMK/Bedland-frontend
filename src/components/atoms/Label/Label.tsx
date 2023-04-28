import * as Styled from './Label.styled';

type LabelProps = {
  htmlFor: string;
  label: string;
  textColor: string;
  size: 'small' | 'medium' | 'large';
};

const Label = ({ htmlFor, label, textColor, size }: LabelProps) => (
  <Styled.Lbl htmlFor={htmlFor} textColor={textColor} size={size}>
    {label}
  </Styled.Lbl>
);

export default Label;
