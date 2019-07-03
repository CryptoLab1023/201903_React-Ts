import { capitalize } from '@material-ui/core/es/utils/helpers'
import { API_URL } from '../../config'
import * as ResponseProvider from '../ResponseProvider'

export default class WebsocketProvider {
    public ws: WebSocket

    constructor() {
        this.connectToWebsocket()
    }

    public connectToWebsocket = () => {
        this.ws = new WebSocket(API_URL)

        this.ws.onopen = (event: Event) => {
            this.ws.onmessage = (ev: MessageEvent): void => {
                const { path, type, body } = JSON.parse(ev.data)
                if (body.message === 'Since you are not logged in, you can not use the API.') return
                try {
                    ResponseProvider[capitalize(path)][type](body)
                } catch (e) {
                    console.warn(e)
                }
            }
        }

        this.ws.onerror = () => {
            this.closeWebsocket()
            setTimeout(() => this.connectToWebsocket(), 1000)
        }

        this.ws.onclose = (ev: CloseEvent): void => {
            console.log(`exit code: ${ev.code}\nwebsocket is successfully closed`)
        }
    }

    public send = (path: string, type: string, { ...data }) => {
        if (this.ws.readyState === this.ws.OPEN) this.ws.send(JSON.stringify({ path, type, body: data }))
        else setTimeout(() => this.send(path, type, { data }), 400)
    }

    public closeWebsocket = () => this.ws.close()
}
