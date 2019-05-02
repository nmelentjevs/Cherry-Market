// const express = require('express');

// const app = express();

// const PORT = process.env.port || 5000;

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', () => {
//   console.log('Socket.io connected');
// });
// server.listen(PORT);

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(5000);
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  res.sendFile(
    '/Users/kingusha/Desktop/HTMLCSSJS/ReactApps/Coffessions/client/public/index.html'
  );
});

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', data => {
    console.log(`Socked id: ${socket.id}`);
  });
});
