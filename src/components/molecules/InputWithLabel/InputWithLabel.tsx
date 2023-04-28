import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import { FC } from 'react';
import { InputProps } from 'components/atoms/Input/Input.types';
import { InputWithLabelProps } from './InputWithLabel.types';
import * as Styled from './InputWithLabel.styled';

const InputWithLabel: FC<InputWithLabelProps & InputProps> = ({
  label,
  input,
  type = 'text',
  placeholder,
  register,
  registerOptions = null,
  regexPattern,
}) => (
  <Styled.InputContainer>
    <Label htmlFor={input} label={label} textColor='white' size='medium' />
    <Input
      input={input}
      placeholder={placeholder}
      register={register}
      type={type}
      registerOptions={registerOptions}
      regexPattern={regexPattern}
    />
  </Styled.InputContainer>
);

export default InputWithLabel;
