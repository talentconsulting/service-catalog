const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
var cors = require('cors');

const indexRouter = require('./routes/index');
const referenceRouter = require('./routes/reference');
const metadataRouter = require('./routes/schema');
const serviceRouter = require('./routes/service');
const { handleError } = require('./helpers/error')

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/services', serviceRouter);
app.use('/metadata', metadataRouter);
app.use('/reference', referenceRouter);

app.use('/openapi', express.static(path.join(__dirname, 'swagger.yml')));

app.use((err, req, res, next) => {
    handleError(err, res);
});

global.db_connection = null;

global.ServiceStatus = {
    LIVE: "live",
    DECOMISSIONED: "decommissioned"
}

module.exports = app;
