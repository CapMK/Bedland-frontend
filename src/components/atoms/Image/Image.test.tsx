import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DefaultImage from 'assets/img/Loginlogo.svg';

import Image from './Image';

describe('Image', () => {
  afterEach(cleanup);
  it('snapshot renders correctly', () => {
    const snapshot = renderer.create(<Image src={DefaultImage} alt='image' />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
