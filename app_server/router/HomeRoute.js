let express = require('express');
let router = express.Router();
let controller = require('../controller/HomeController');

router.use(function (req,res,next) {
    next();
})

router.get('/', controller.home);
module.exports = router;