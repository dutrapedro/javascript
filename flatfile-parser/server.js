'use strict';

const app = require('./config/express')();
const setupFolders = require('./config/folders').setupFolders();
const port = process.env.PORT || 3000;
const logger = require('./logger');

app.listen(port, () => {
    logger.info('Flatfile parser running on '+port);
});