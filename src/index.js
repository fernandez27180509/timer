const express = require('express');
const app = express();
const path = require('path');

/** settings */
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));

app.set('scripts', path.join(__dirname, 'scripts'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

/** routes */
app.use(require('./routes/index'))

/** port */
app.listen(app.get('port'));