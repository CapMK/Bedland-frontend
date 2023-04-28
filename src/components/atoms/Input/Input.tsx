import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './Input.styled';
import { InputProps } from './Input.types';

const Input = ({
  input,
  type = 'text',
  placeholder,
  register,
  registerOptions = null,
  regexPattern,
}: InputProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.sidebarTabsPressed}
      data-testid={input}
      {...register(input, { ...regexPattern, ...registerOptions })}
    />
  );
};

export default Input;
