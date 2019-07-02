export interface IOwnProps {
    count: number
    className: string
    width: string
    body: string
    title: string
    showModal: boolean
    handleModal: () => void
    handleSubmit: () => void
    children: JSX.Element[] | JSX.Element
}
