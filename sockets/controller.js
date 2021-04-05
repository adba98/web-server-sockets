const socketController = (socket) => {

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 4042021;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}
