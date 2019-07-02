export interface IOwnProps {
    items: Item[][]
}

interface Item {
    numeric: boolean
    width: number
    title: string
}
