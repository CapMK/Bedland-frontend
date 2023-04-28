import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import ThemeProvider from 'theme/ThemeContext';
import loginRegexPattern from 'utils/loginRegexPatterns';
import InputWithLabel from './InputWithLabel';

const SnapshotInput = () => {
  const { register } = useForm();

  return (
    <ThemeProvider>
      <form action=''>
        <InputWithLabel
          label='login'
          input='login'
          type='text'
          placeholder='login'
          register={register}
          regexPattern={loginRegexPattern.login}
        />
      </form>
    </ThemeProvider>
  );
};

describe('Input with Label', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderer.create(<SnapshotInput />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
