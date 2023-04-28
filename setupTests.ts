import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-styled-components';
import { configure } from '@testing-library/react';
import mswServer from './src/mocks/mswServer';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

configure({ testIdAttribute: 'data-testid' });
