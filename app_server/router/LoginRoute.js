let express = require('express');
let router = express.Router();
let controller = require('../controller/LoginController');

router.use(function (req,res,next) {
    next();
})

router.get('/', controller.index);
module.exports = router;