import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from 'App/routing/routes';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import * as Styled from 'components/atoms/ErrorMessage/ErrorMessage.styled';
import { ThemeContext } from 'theme/ThemeContext';
import Typography from 'components/atoms/Typography/Typography';
import loginRegexPattern from 'utils/loginRegexPatterns';
import { LOGIN_INPUT_WIDTH } from 'utils/constans';
import ERROR_MESSAGES from 'utils/messages';
import { useGetUserMutation, useLoginMutation } from 'services/user/userApi';
import { LoginRequest } from 'services/user/userApi.types';
import { LoginFormContainer, ResetPasswordLink } from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorNoUser, setErrorNoUser] = useState<boolean>(false);
  const { palette } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [getUser] = useGetUserMutation();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FieldValues) => {
    const currentUser: LoginRequest = {
      login: formData.login,
      password: formData.password,
    };
    const loginData = await login(currentUser);
    if ('data' in loginData) {
      const data = await getUser({ userId: loginData.data.userId, role: loginData.data.role });
      if ('data' in data) {
        navigate(routes.homeForLoggedIn);
      } else {
        setErrorNoUser(true);
      }
    } else {
      setErrorNoUser(true);
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='header1' color='light' style={{ textAlign: 'center' }}>
        Login
      </Typography>
      <InputWithLabel
        label='Login'
        input='login'
        placeholder='Enter your login'
        type='text'
        register={register}
        regexPattern={loginRegexPattern.login}
      />

      <InputWithLabel
        label='Password'
        input='password'
        placeholder='Enter your password'
        type='password'
        register={register}
        regexPattern={loginRegexPattern.password}
      />
      <Styled.ErrorMsg>
        {errors.password || errors.login || errorNoUser ? (
          <ErrorMessage>{ERROR_MESSAGES.loginPage.errorMessage}</ErrorMessage>
        ) : null}
      </Styled.ErrorMsg>
      <Button wrapper width={LOGIN_INPUT_WIDTH} data-testid='login-button'>
        <Button type='submit' variant='primary'>
          Login
        </Button>
      </Button>

      <ResetPasswordLink palette={palette} to={routes.resetPassword}>
        Forgot your password?
      </ResetPasswordLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
