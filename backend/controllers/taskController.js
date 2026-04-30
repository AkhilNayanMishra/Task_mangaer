const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, project, assignee, dueDate } = req.body;
  if (!title || !project) return res.status(400).json({ message: 'Title and project required' });
  try {
    const task = new Task({ title, description, project, assignee, dueDate });
    await task.save();
    res.json(task);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getTasksForProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await Task.find({ project: projectId }).populate('assignee', 'name email');
    res.json(tasks);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { createTask, updateTask, getTasksForProject };
