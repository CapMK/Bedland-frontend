import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import RulesDescription from './RulesDescription';

describe('RulesDescription', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <BrowserRouter>
          <RulesDescription />
        </BrowserRouter>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
