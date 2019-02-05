var socket = io(); // se usa var para aumentar la compatibilidad de los browsers

socket.on('connect', function() {
    console.log('Conectado al servidor')
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar invormación
socket.emit('enviarMensaje', {
    usuario: 'Jose D Oleo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

// Escuchar información desde el servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);

});