import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import PasswordResetPage from './ResetPasswordPage';

describe('PasswordReset Page', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <PasswordResetPage />
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
