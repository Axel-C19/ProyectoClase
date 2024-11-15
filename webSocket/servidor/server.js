const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8080, host:'0.0.0.0'});

server.on('connection', (socket) =>{
    console.log('Nuevo cliente conectado');

    socket.on('message', (message)=>{
        console.log(`Mnesaje recibido: ${message}`);

        server.clients.forEach((client)=>{
            if(client.readyState === WebSocket.OPEN){
                client.send(message);
            }
        });
    });
    
    socket.on('close', () =>{
        console.log('Cliente desconectado');
    })
});

console.log('servidor corriendo en ws://localhost:8080');