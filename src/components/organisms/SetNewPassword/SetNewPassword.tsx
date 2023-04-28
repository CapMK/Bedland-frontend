import { useContext } from 'react';

import RulesDescription from 'components/molecules/PasswordRulesDescription/RulesDescription';
import ResetPasswordForm from 'components/organisms/ResetPasswordForm/ResetPasswordForm';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './SetNewPassword.styled';

const SetNewPassword = () => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.SetNewPasswordContainer palette={palette}>
      <Styled.ResPassCenteredHeading>Reset your password</Styled.ResPassCenteredHeading>
      <RulesDescription />
      <ResetPasswordForm />
    </Styled.SetNewPasswordContainer>
  );
};
export default SetNewPassword;
