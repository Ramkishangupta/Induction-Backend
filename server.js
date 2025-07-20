const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const app = require('./app');
const connectDatabase = require('./config/database');

// Connect to DB
connectDatabase();

// Start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Gracefully shut down on unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
