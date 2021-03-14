const express = require('express');
const router = express.Router();

const populaireCtrl = require('../controllers/populaire');

router.get('/', populaireCtrl.getAllPopulaires);
router.get('/:id', populaireCtrl.getOnePopulaire);
router.post('/order', populaireCtrl.orderPopulaires);

module.exports = router;