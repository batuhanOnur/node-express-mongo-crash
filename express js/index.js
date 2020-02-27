const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js');


const app = express();


// Inıt Middleware
//app.use(logger);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server stared on port ${PORT}`));