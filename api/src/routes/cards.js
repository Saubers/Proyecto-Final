const { Router } = require('express');
const {idCards} = require('../../controllers/cardsFunction');
const router = Router();

router.get('/:id', idCards);
module.exports = router;