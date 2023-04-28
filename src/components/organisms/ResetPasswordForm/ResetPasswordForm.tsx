import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import * as Styled from 'components/atoms/ErrorMessage/ErrorMessage.styled';
import { RegisterOptions } from 'components/atoms/Input/Input.types';
import loginRegexPattern from 'utils/loginRegexPatterns';
import { handleErrorMessage, watcher } from './ResetPasswordForm.utils';
import { ResetPasswordFormContainer } from './ResetPasswordForm.styled';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const enteredPasswordWatch = watch('password', '');

  const errorConditionWrongRules = Boolean(errors.password || errors.confirmPassword);

  let errorConditionIfPasswordsMatchUp = false;

  const whichErrorMessageCondition = Boolean(
    errors.password || (errorConditionIfPasswordsMatchUp && errors.password),
  );

  const resetPasswordRegOptions: RegisterOptions = {
    validate: (value) => {
      errorConditionIfPasswordsMatchUp = watcher(enteredPasswordWatch, value);
      return errorConditionIfPasswordsMatchUp;
    },
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(data); // logic with fetch to the server should be here
    navigate('/');
  };

  return (
    <ResetPasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        label='Your new password'
        input='password'
        placeholder='Enter your new password'
        type='password'
        register={register}
        regexPattern={loginRegexPattern.password}
      />

      <InputWithLabel
        label='Confirm the password'
        input='confirmPassword'
        placeholder='Confirm the password'
        type='password'
        register={register}
        registerOptions={resetPasswordRegOptions}
        regexPattern={loginRegexPattern.password}
      />

      <Styled.ErrorMsg>
        {errorConditionWrongRules ? (
          <ErrorMessage>{handleErrorMessage(whichErrorMessageCondition)}</ErrorMessage>
        ) : null}
      </Styled.ErrorMsg>

      <Button type='submit' variant='text'>
        Reset my password
      </Button>
    </ResetPasswordFormContainer>
  );
};

export default ResetPasswordForm;
