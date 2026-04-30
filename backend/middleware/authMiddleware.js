const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'change_this_secret');
    req.user = decoded; // { id, role, email }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const authorizeRole = (roles = []) => (req, res, next) => {
  if (!roles.length) return next();
  const userRole = req.user && req.user.role;
  if (!userRole || !roles.includes(userRole)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

module.exports = { auth, authorizeRole };
