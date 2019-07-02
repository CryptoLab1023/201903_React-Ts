export const API_URL = 'ws://localhost:50003'

interface IBody {
    name?: string
    price?: string
    amount?: string
    totalAmount?: string
}

export interface IData {
    path: string
    type: string
    body: IBody
}
