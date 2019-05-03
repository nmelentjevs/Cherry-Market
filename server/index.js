const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const auth = require('./routes/api/auth');
const items = require('./routes/api/items');
const graphHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');

const app = express();

// Passport config
require('./config/passport')(passport);

// Passport middleware

app.use(passport.initialize());

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/auth', auth);
app.use('/items', items);

app.use(cors());
app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphiql: true
  })
);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.port || 5000;

app.listen(PORT, () => `Server started on port ${PORT}`);
