const Project = require('../models/Project');

const createProject = async (req, res) => {
  const { name, description, members } = req.body;
  if (!name) return res.status(400).json({ message: 'Name required' });
  try {
    const project = new Project({ name, description, members: members || [], createdBy: req.user.id });
    await project.save();
    res.json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getProjects = async (req, res) => {
  try {
    // If admin, return all; otherwise return projects where member
    if (req.user.role === 'admin') {
      const list = await Project.find().populate('members', 'name email');
      return res.json(list);
    }
    const list = await Project.find({ members: req.user.id }).populate('members', 'name email');
    res.json(list);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { createProject, getProjects };
