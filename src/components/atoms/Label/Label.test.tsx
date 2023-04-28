import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Label from './Label';

describe('Label', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderer
      .create(<Label label='login' htmlFor='login' textColor='white' size='small' />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
