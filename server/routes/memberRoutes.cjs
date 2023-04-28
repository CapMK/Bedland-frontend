/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const memberController = require('../controller/memberController.cjs');

router.post('/', memberController.login);
router.post('/', memberController.logout);

module.exports = router;