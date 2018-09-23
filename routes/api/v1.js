var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.send({ version: '1.0' });
});

module.exports = router;
