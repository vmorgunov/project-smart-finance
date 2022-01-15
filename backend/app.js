const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// const {userRouter} = require('./routers/api')

// const { errorHandler } = require('./helpers')

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use('/users', userRouter)

// app.use(errorHandler);
// app.use((req, res) => {
//   res.status(404).json({ message: 'Not found' });
// });

module.exports = app;
