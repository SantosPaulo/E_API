const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.send({ version: '1.0' });
});

module.exports = router;
