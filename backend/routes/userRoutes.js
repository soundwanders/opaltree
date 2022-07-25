const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getSelf,
} = require('../controllers/userController');

const { auth } = require('../middleware/auth');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/self', auth, getSelf);

module.exports = router;