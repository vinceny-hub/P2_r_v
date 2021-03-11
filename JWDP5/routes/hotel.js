const express = require('express');
const router = express.Router();

const hotelCtrl = require('../controllers/hotel');

router.get('/', hotelCtrl.getAllHotels);
router.get('/:id', hotelCtrl.getOneHotel);
router.post('/order', hotelCtrl.orderHotels);

module.exports = router;