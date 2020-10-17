const express = require('express');
const path = require('path');
const session = require('express-session');
// Requiring passport as we've configured it
const passport = require('./config/passport');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
// Requiring our routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync().then(app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🌎 ==> API server now on port ${PORT}!`);
}));
