var express = require('express');
var router = express.Router();
const productRouter = require('./products');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.use('/', productRouter);

module.exports = router;
