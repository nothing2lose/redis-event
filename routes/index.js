var express = require('express');
var router = express.Router();

var ctrler = require('../controllers/redis_controller');

/* GET home page. */
// 인덱스 호출
router.get('/', function(req, res) {
  ctrler.genResult("자 참석해봐염", undefined, function (result){
      res.render('index', result);
  });
});


module.exports = router;
