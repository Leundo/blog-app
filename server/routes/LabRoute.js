var express = require('express');
var router = express.Router();
var ctrl = require('../controller/LabController');

router.post('/get-certification', ctrl.getCertification);
router.post('/get-username', ctrl.getUsername);
router.post('/get-advanced-article', ctrl.getAdvancedArticle);
router.post('/post-article', ctrl.postArticle);
router.post('/put-article', ctrl.putArticle);

module.exports = router;
