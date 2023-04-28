// src/mocks/server.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import handlers from './handlers';
// This configures a request mocking server with the given request handlers.
const mswServer = setupServer(...handlers);
export default mswServer;
