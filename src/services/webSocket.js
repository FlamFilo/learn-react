export const WEB_SOCKET_URL = 'wss://srrj6.sse.codesandbox.io/'
export let webSocket = new WebSocket(WEB_SOCKET_URL)
export default webSocket

webSocket.onopen = () => {
    console.log('connected')
}

webSocket.onclose = () => {
    console.log('disconnected')
    // automatically try to reconnect on connection loss
    webSocket = new WebSocket(WEB_SOCKET_URL)
}
