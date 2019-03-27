export interface OwnProps {
    items: Item[];
}

interface Item {
    numeric: boolean,
    width: number,
    title: string,
}