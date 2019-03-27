export interface OwnProps {
    count: number;
    className: string,
    width: string,
    body: string,
    title: string,
    showModal: boolean,
    handleModal: () => void,
    handleSubmit: () => void,
    children: any,
}