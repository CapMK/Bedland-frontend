/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const jsonServer = require('json-server');
const memberController = require('./controller/memberController.cjs');
const managerController = require('./controller/managerController.cjs');

const server = jsonServer.create();
const router = jsonServer.router(require('../db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/member/login', memberController.login);
server.use('/member/logout', memberController.logout);
server.use('/manager/login', managerController.login);
server.use('/manager/logout', managerController.logout);

server.use(router);

server.listen(3001, () => {
    console.log(`Listening on port ${3001}...`)
});
