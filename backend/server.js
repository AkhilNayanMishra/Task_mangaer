const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();
// Allow cross-origin requests from the dev server and the production frontend
// Update or restrict origins as needed. For quick unblock you can use origin: '*'
app.use(cors({
	origin: [
		'http://localhost:5174',
		'https://task-mangaer-one.vercel.app'
	],
	credentials: true
}));
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('Team Task Manager API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
