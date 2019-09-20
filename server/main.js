const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

// --------------------- HTTP ------------------------
server.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
  } else {
    console.info(`Express server is running at port ${port}.`);
  }
});

app.use(express.static(path.join(__dirname, 'dist')));

// -------------------- SocketIO ---------------------
io.on('connection', (socket) => {
  console.info(`Client socket ${socket.id} is connecting...`);
  socket.on('disconnect', () => {
    console.info(`Client socket ${socket.id} disconnected.`);
  });
});
