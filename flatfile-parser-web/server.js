'use strict';

const app = require('./config/express.js')(),
    port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});