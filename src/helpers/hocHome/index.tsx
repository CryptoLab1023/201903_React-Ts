import * as React from 'react'
import WebsocketProvider from '../../utils/WebSocket'

export interface IHoc {
    websocketProvider: WebsocketProvider
}

export const hocFactory = (Component: React.FC) => (props: any) => {
    const [websocketProvider] = React.useState<WebsocketProvider>(new WebsocketProvider())

    React.useEffect(() => {
        console.log('HoC Component: update')
        websocketProvider.send('exchange', 'currencyPairs', {})
        return () => {
            console.log('HoC Component: unmount')
            websocketProvider.closeWebsocket()
        }
    })

    return <Component {...props} websocketProvider={websocketProvider} />
}
