const express = require('express');
const { createTodo, editTodo, getTodo } = require('../controllers/todo.controller');

const router = express.Router();

router.post('/create', createTodo);
router.put('/edit', editTodo);
router.get('/get', getTodo);

module.exports = router;