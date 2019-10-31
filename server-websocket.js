const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })
console.log('Starting websocket server')

// Memory database
const actions = []

wss.on('connection', function connection(ws) {
    console.log(`new connection, ${wss.clients.size} clients`)

    // Send saved actions to new client
    actions.forEach(action => {
        ws.send(action)
    })

    ws.on('message', function incoming(data) {
        console.log('new message', JSON.stringify(data))
        // Save action
        actions.push(data)

        // Broadcast to all clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})
