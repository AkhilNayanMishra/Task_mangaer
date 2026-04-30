const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectController');
const { auth, authorizeRole } = require('../middleware/authMiddleware');

router.use(auth);
router.post('/', authorizeRole(['admin']), createProject);
router.get('/', getProjects);

module.exports = router;
