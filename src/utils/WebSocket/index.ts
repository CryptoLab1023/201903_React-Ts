import { WEB_SOCKET_PORT, WEB_SOCKET_URL } from '../Constant'

export default class WebsocketWrapper {
    private readonly endPoint: string
    private ws: WebSocket

    constructor() {
        this.endPoint = '/'
        this.connectToWebsocket()
    }

    public connectToWebsocket = () => {
        this.ws = new WebSocket(`ws://${WEB_SOCKET_URL}:${WEB_SOCKET_PORT}${this.endPoint}`)
        this.ws.onerror = () => {
            this.closeWebsocket()
            setTimeout(() => this.connectToWebsocket(), 1000)
        }
    }

    public closeWebsocket = () => this.ws.close()

    public functionExample = () => {
        if (this.ws && this.ws.readyState === this.ws.OPEN) {
            console.log('functionExample')
        }
    }
}
