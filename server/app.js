const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Şimdilik her yere açık, Ayg Labs özgürlüğü!
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Biri bağlandı! ID:', socket.id);

    socket.on('disconnect', () => {
        console.log('Biri ayrıldı :( ID:', socket.id);
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`CO-DEER Sunucusu ${PORT} portunda uykusuz kalıyor...`);
});
