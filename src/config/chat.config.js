import { Server } from 'socket.io';

const io = (httpServer) =>  new Server(httpServer)

io.on("connection", async (socket) => {
    console.log('Se ha conectado un nuevo cliente');

    socket.emit('messages', await messageDao.getAll())
    socket.on('new_msg', async (data) => {
        await messageDao.save(data);

        io.sockets.emit('messages', await messageDao.getAll())
    })
})