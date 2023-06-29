const express = require('express');
const cors = require('cors');
const db = require('./db');
const Validator = require('validatorjs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to this server',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
