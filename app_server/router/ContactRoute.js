let express = require('express');
let router = express.Router();
let controller = require('../controller/ContactController');

router.use(function (req,res,next) {
    next();
})

router.get('/', controller.contact);
module.exports = router;