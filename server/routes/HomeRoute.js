var express = require('express');
var router = express.Router();
var ctrl = require('../controller/HomeController.js');

router.post('/get-article', ctrl.getArticle);
router.post('/get-articles', ctrl.getArticles);

module.exports = router;