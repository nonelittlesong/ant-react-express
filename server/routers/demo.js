const express = require('express');
const DemoModel = require('../models/demo');

const router = express.Router();
const demoModel = new DemoModel('song', 'nonelittlesong', 'hehe.png');

router.get('/async', async (req, res, next) => {
  try {
    const shit = await demoModel.testQuery();
    console.debug('route(/demo/async): start');
    console.debug(shit);
    res.status(200).json({ msg: 'hello world' });
    next();
  } catch (e) {
    next(e);
  }
});

router.get('/sync', (req, res) => {
  console.log('route demoSync start');
  res.status(200).json({ msg: 'route demoSync response' });
});

router.get('/async-error', async () => {
  throw new Error('throw error in async funxtion without try..catch');
});

router.get('/sync-error', () => {
  throw new Error('throw error in sync funxtion without try..catch');
});

module.exports = router;
