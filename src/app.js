var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.status(403).end();
});

io.on('connection', function (socket) {
    socket.disconnect();
});

server.listen(process.env.PORT || 8000);
