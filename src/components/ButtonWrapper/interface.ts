export interface IOwnProps {
    func: (element: string) => void,
    className: string,
    element: string,
    children: JSX.Element[] | JSX.Element
}