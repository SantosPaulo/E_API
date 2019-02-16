const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.render('index', { title: 'Express' });
});

module.exports = router;
