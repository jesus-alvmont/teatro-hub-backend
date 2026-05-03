const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://vercel.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = cors(corsOptions);
