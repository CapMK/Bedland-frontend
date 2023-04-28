import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import LoginForm from './LoginForm';

describe('Login Form', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <Provider store={reduxStore}>
              <LoginForm />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
