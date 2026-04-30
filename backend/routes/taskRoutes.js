const express = require('express');
const router = express.Router();
const { createTask, updateTask, getTasksForProject } = require('../controllers/taskController');
const { auth } = require('../middleware/authMiddleware');

router.use(auth);
router.post('/', createTask);
router.put('/:id', updateTask);
router.get('/project/:projectId', getTasksForProject);

module.exports = router;
