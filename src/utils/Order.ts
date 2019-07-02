import { API_URL, IData } from '../config'

export const submitOrder = (price: string, amount: string, totalAmount: string) => {
    const ws = new WebSocket(API_URL)
    const data: IData = { path: 'wallet', type: 'trade', body: { price, amount, totalAmount } }

    ws.onopen = () => {
        ws.onmessage = (ev: MessageEvent) => console.log(ev)
        ws.onclose = (ev: CloseEvent) => console.log(ev)
        ws.send(JSON.stringify({ data }))
    }
}
