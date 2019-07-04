export const API_URL = 'ws://localhost:50003'

interface IBodyBase {
    name: string
    price: string
    amount: string
    totalAmount: string
}

type IBody = Partial<IBodyBase>

export interface IData {
    path: string
    type: string
    body: IBody
}
