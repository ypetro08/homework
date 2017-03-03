(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messages = $('#messages'),
        login = $('#login'),
        messageDiv = $('#messageDiv'),
        name = $('#name');

    login.submit(e => {
        e.preventDefault();
        if (name.val()) {
            socket.emit('name', name.val());
            login.hide();
            messageDiv.show();
        } else {
            alert('Please enter your name');
        }
    });

    socket.on('message', msg => {
        console.log(msg);

        messages.append('<span>' + msg + '</span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });
}());