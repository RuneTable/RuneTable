const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

let creatures = [];

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('updateCreatures', creatures);

  socket.on('addCreature', (creature) => {
    creatures.push(creature);
    io.emit('updateCreatures', creatures);
  });

  socket.on('rollAll', (updatedCreatures) => {
    creatures = updatedCreatures;
    io.emit('updateCreatures', creatures);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('RuneTable backend is running!');
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
