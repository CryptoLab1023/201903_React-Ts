export interface OwnProps {
    items: Item[];
    children: any,
}

interface Item {
    url: string,
    text: string,
}