export interface IOwnProps {
    items: Item[]
    children: any
}

interface Item {
    url: string
    text: string
}
