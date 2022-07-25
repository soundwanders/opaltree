const express = require('express');
const router = express.Router();

const { 
  getBook, 
  setBook, 
  updateBook, 
  deleteBook 
} = require('../controllers/bookController');

const { auth } = require('../middleware/auth');

router.route('/').get(auth, getBook).post(auth, setBook);
router.route('/:id').delete(auth, deleteBook).put(auth, updateBook);

module.exports = router;