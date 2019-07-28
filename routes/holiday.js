const express = require('express');
const router = express.Router();

const holidayController = require('../controllers/holidayController')

router.route('/holiday/:year/:country/:month')
    .get(holidayController.index)

module.exports = router;