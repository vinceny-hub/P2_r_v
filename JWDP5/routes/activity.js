const express = require('express');
const router = express.Router();

const activityCtrl = require('../controllers/activity');

router.get('/',activityCtrl.getAllActivities);
router.get('/:id', activityCtrl.getOneActivity);
router.post('/order', activityCtrl.orderActivities);

module.exports = router;