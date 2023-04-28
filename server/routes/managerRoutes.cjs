/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const managerController = require('../controller/managerController.cjs');

router.post('/', managerController.login);
router.post('/', managerController.logout);

module.exports = router;