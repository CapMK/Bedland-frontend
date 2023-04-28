import ERROR_MESSAGES from 'utils/messages';

export const handleErrorMessage = (whichErrorMessageCondition: boolean): string =>
  whichErrorMessageCondition
    ? ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules
    : ERROR_MESSAGES.resetPasswordPage.passwordsDoesNotMatchUp;

export const watcher = (password: string, confirmPassword?: string) => {
  let passwordsMatchUp = false;

  if (confirmPassword !== undefined) {
    if (confirmPassword === password) passwordsMatchUp = true;
    else passwordsMatchUp = false;
  }
  return passwordsMatchUp;
};
