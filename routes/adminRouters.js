const express = require('express');
const router = express.Router();

const { getAdmin, logout , logOutPost } = require('../controllers/adminRoutersHandlers');

router.get('/', getAdmin);
router.get('/logout', logout);
router.post('/logout', logOutPost);

module.exports = router;
