export const requestInterval = (time = 3000, functions: Array<() => void>, ws: WebSocket) => {
    if (functions.length > 0) {
        functions.forEach(func => func())
    }
    if (time && ws.readyState === ws.OPEN) {
        setTimeout(() => requestInterval(time, functions, ws), time)
    }
}
