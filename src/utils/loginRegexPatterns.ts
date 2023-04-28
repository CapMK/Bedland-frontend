import { InputVariant, TRegister } from 'components/atoms/Input/Input.types';
import { Getters } from 'types/shared.types';

type LoginRegexProps = Getters<InputVariant, TRegister>;

const loginRegexPattern: LoginRegexProps = {
  login: {
    pattern: /^[a-zA-Z0-9]+$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
  password: {
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),<.>/?;:'"]).{8,24}$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
  confirmPassword: {
    required: true,
  },
};

export default loginRegexPattern;
// ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$ <- regex for password that should work.
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
